const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Armazena o ranking em memória
let ranking = [];

// Rota para obter o ranking atual
app.get('/api/ranking', (req, res) => {
    res.json(ranking);
});

// Rota para adicionar pontuação
app.post('/api/ranking', (req, res) => {
    const { name, score } = req.body;
    
    if (!name || score === undefined) {
        return res.status(400).json({ error: 'Nome e pontuação são obrigatórios' });
    }

    const newEntry = {
        name: name.trim(),
        score: parseInt(score),
        timestamp: new Date().toISOString()
    };

    ranking.push(newEntry);
    ranking.sort((a, b) => b.score - a.score);
    ranking = ranking.slice(0, 20); // Mantém top 20

    // Emite atualização para todos os clientes conectados (TVs)
    io.emit('ranking-update', ranking);

    res.json({ success: true, ranking });
});

// Rota para limpar ranking
app.post('/api/ranking/clear', (req, res) => {
    ranking = [];
    io.emit('ranking-update', ranking);
    res.json({ success: true });
});

// Socket.io para conexões em tempo real
io.on('connection', (socket) => {
    console.log('Cliente conectado:', socket.id);
    
    // Envia ranking atual para o novo cliente
    socket.emit('ranking-update', ranking);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════╗
║   🎮 SERVIDOR SHOW DO MILHÃO ATIVO 🎮         ║
╠════════════════════════════════════════════════╣
║                                                ║
║  📱 Tablets/Jogadores acessem:                ║
║     http://localhost:${PORT}/index.html           ║
║                                                ║
║  📺 Notebook/TV de Ranking acesse:            ║
║     http://localhost:${PORT}/ranking-tv.html      ║
║                                                ║
║  🌐 Ou use o IP da rede:                      ║
║     http://SEU-IP:${PORT}                         ║
║                                                ║
╚════════════════════════════════════════════════╝
    `);
});
