# 🎮 Show do Milhão - Jogo Educativo Interativo

Esse é um projeto criado exclusivamente para a mostra de curso do colégio em que estudo, mas estou realizando pesquisas para realizar melhorias no jogo, que em breve será lançado na playstore.

## 🎯 Sobre o Jogo

Jogo educativo estilo "Show do Milhão" com perguntas de:
- 📐 Matemática
- 📚 História
- 🌍 Geografia
- 📝 Português
- 🎨 Artes

## ✨ Recursos

- ✅ 15 perguntas por partida
- ✅ Sistema de prêmios progressivo (até R$ 1.000.000)
- ✅ Ajudas: 50:50, Pular, Cartas
- ✅ Timer de 15 segundos
- ✅ Loja de ajudas com moedas
- ✅ Ranking de pontuações
- ✅ Narração de perguntas (português)
- ✅ Efeitos sonoros
- ✅ Animações e confetes
- ✅ Acessibilidade com VLibras

## 🚀 Como Jogar Online

**Jogue agora:**
[Clique aqui para jogar](https://csaad0.github.io/show-do-milhao/)

1. Digite seu nome
2. Escolha uma matéria
3. Responda as perguntas
4. Ganhe prêmios!

## 💻 Modo Sala de Aula (Ranking ao Vivo)

Para usar com múltiplos tablets e ranking em tempo real:

### 1. Instalar dependências:
```bash
npm install
```

### 2. Iniciar servidor:
```bash
npm start
```
ou clique em `INICIAR-SERVIDOR.bat`

### 3. Conectar dispositivos:
- **📺 TV/Notebook (Ranking):** `http://localhost:3000/ranking-tv.html`
- **📱 Tablets (Jogadores):** `http://SEU-IP:3000/index.html`

## 📂 Estrutura do Projeto

```
show-do-milhao/
├── index.html              # Jogo principal
├── ranking-tv.html         # Tela de ranking ao vivo
├── perguntas.json          # Banco de perguntas
├── server.js               # Servidor Node.js (opcional)
├── *.mp3                   # Efeitos sonoros e música
├── DEPLOY-GITHUB.md        # Guia de publicação
├── INSTRUCOES-RANKING.md   # Instruções do ranking ao vivo
└── LINKS-DE-ACESSO.md      # Links de acesso local

```

## 🎓 Uso Educacional

Ideal para:
- Revisão de conteúdo
- Gincanas escolares
- Atividades em grupo
- Avaliações lúdicas
- Competições entre turmas

## 🛠️ Tecnologias

- HTML5 / CSS3
- JavaScript (Vanilla)
- Node.js + Express (servidor opcional)
- Socket.io (ranking em tempo real)
- Web Speech API (narração)
- Canvas Confetti (animações)
- VLibras (acessibilidade)

## 📱 Compatibilidade

- ✅ Chrome / Edge / Firefox / Safari
- ✅ Desktop / Tablet / Mobile
- ✅ Windows / Mac / Linux / Android / iOS

## 📄 Licença

Projeto educacional de código aberto.

## 👨‍💻 Desenvolvido por

Aluno do CEP (Colégio)
Mostra de Curso - 2026

---

⭐ Se gostou do projeto, deixe uma estrela!
🐛 Encontrou um bug? Abra uma issue!
💡 Tem sugestões? Contribua com o projeto!
