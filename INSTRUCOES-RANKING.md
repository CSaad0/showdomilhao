# 🎮 SISTEMA DE RANKING AO VIVO - SHOW DO MILHÃO

## 📋 Como Funcionar

Este sistema permite que:
- **Tablets/Celulares**: Joguem o Show do Milhão normalmente
- **Notebook/TV**: Exiba o ranking em tempo real automaticamente

---

## 🚀 PASSO A PASSO PARA INICIAR

### 1️⃣ Instalar Dependências (Primeira vez apenas)

Abra o PowerShell nesta pasta e execute:

```powershell
npm install
```

Isso instalará: Express, Socket.io e CORS.

---

### 2️⃣ Iniciar o Servidor

No PowerShell, execute:

```powershell
npm start
```

Você verá uma mensagem assim:

```
╔════════════════════════════════════════════════╗
║   🎮 SERVIDOR SHOW DO MILHÃO ATIVO 🎮         ║
╠════════════════════════════════════════════════╣
║                                                ║
║  📱 Tablets/Jogadores acessem:                ║
║     http://localhost:3000/index.html          ║
║                                                ║
║  📺 Notebook/TV de Ranking acesse:            ║
║     http://localhost:3000/ranking-tv.html     ║
║                                                ║
║  🌐 Ou use o IP da rede:                      ║
║     http://SEU-IP:3000                        ║
║                                                ║
╚════════════════════════════════════════════════╝
```

---

### 3️⃣ Descobrir o IP da Sua Rede

Para que os tablets possam acessar, você precisa do IP do seu notebook.

Execute no PowerShell:

```powershell
ipconfig
```

Procure por "Endereço IPv4" (algo como `192.168.1.100`).

---

### 4️⃣ Conectar os Dispositivos

#### 📺 No Notebook (Tela de Ranking):
Abra o navegador e acesse:
```
http://localhost:3000/ranking-tv.html
```

#### 📱 Nos Tablets (Jogadores):
Abra o navegador e acesse (substitua pelo IP do seu notebook):
```
http://192.168.1.100:3000/index.html
```

**IMPORTANTE**: Todos os dispositivos devem estar na mesma rede WiFi!

---

## ✨ Como Funciona

1. Os alunos jogam nos tablets
2. Quando terminam uma partida, a pontuação é enviada automaticamente
3. O ranking na TV atualiza INSTANTANEAMENTE
4. Aparece o nome do jogador, pontuação e horário

---

## 🎯 Recursos

### No Ranking da TV:
- ✅ Atualização em tempo real (sem recarregar)
- ✅ Top 3 destacado com medalhas (🥇🥈🥉)
- ✅ Animações suaves
- ✅ Indicador de conexão (verde = conectado)
- ✅ Fundo animado

### No Jogo (Tablets):
- ✅ Funciona normalmente
- ✅ Envia pontuação automaticamente ao terminar
- ✅ Funciona mesmo se o servidor estiver offline

---

## 🔧 Solução de Problemas

### ❌ "Servidor não encontrado"
- Verifique se executou `npm start`
- Confirme se todos estão na mesma rede WiFi
- Verifique o IP com `ipconfig`

### ❌ "npm não é reconhecido"
- Instale o Node.js: https://nodejs.org/
- Reinicie o PowerShell após instalar

### ❌ Ranking não atualiza
- Verifique o indicador de conexão (deve estar verde)
- Recarregue a página do ranking
- Verifique o console (F12) para erros

---

## 🎓 Para Usar em Sala de Aula

1. **Prepare antes da aula:**
   - Instale as dependências (`npm install`)
   - Teste localmente
   - Anote o IP do seu notebook

2. **No dia da aula:**
   - Conecte o notebook à rede da escola
   - Execute `npm start`
   - Abra o ranking na TV
   - Distribua o link para os alunos

3. **Durante a aula:**
   - Os alunos jogam normalmente
   - O ranking aparece automaticamente na TV
   - Todos veem quem está ganhando em tempo real!

---

## 📊 API do Servidor

Se quiser integrar com outros sistemas:

- **GET** `/api/ranking` - Busca o ranking atual
- **POST** `/api/ranking` - Adiciona nova pontuação
  ```json
  { "name": "João", "score": 50000 }
  ```
- **POST** `/api/ranking/clear` - Limpa o ranking

---

## 💡 Dicas

- Deixe a tela do ranking sempre aberta no notebook/TV
- O ranking fica salvo enquanto o servidor estiver rodando
- Para resetar o ranking, reinicie o servidor
- Use modo tela cheia (F11) no ranking para melhor visualização

---

## 🆘 Suporte

Em caso de dúvidas, verifique:
1. Console do navegador (F12)
2. Terminal onde o servidor está rodando
3. Certifique-se que o firewall não está bloqueando a porta 3000

---

**Desenvolvido para educação** 🎓
Aproveite o jogo e boa sorte! 🍀
