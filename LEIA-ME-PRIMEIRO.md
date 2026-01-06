# 📊 RESUMO DO SISTEMA - Show do Milhão

## 🎯 Você Tem DOIS MODOS de Usar:

---

## 🌐 MODO 1: GitHub Pages (Online)

### Como Funciona:
- Jogo hospedado no GitHub (gratuito)
- Link: `https://csaad0.github.io/show-do-milhao/`
- Funciona em qualquer dispositivo com internet
- Ranking salvo localmente em cada navegador

### Quando Usar:
- ✅ Lição de casa
- ✅ Jogo individual
- ✅ Compartilhar com outras escolas
- ✅ Disponibilizar para pais

### Como Configurar:
1. Siga o arquivo: **DEPLOY-GITHUB.md**
2. Pronto! Compartilhe o link

---

## 🏫 MODO 2: Servidor Local (Sala de Aula)

### Como Funciona:
- Servidor Node.js rodando no seu notebook
- Tablets conectam via WiFi
- Ranking atualiza EM TEMPO REAL na TV
- Ideal para competições

### Quando Usar:
- ✅ Gincanas escolares
- ✅ Competição entre alunos
- ✅ Múltiplos tablets jogando
- ✅ Ranking ao vivo na TV/projetor

### Como Configurar:
1. Execute: `npm install` (primeira vez)
2. Execute: `npm start`
3. Abra ranking na TV: `http://localhost:3000/ranking-tv.html`
4. Alunos acessam: `http://SEU-IP:3000/index.html`

**Detalhes completos:** **INSTRUCOES-RANKING.md**

---

## 📁 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| **index.html** | Jogo principal |
| **ranking-tv.html** | Tela de ranking ao vivo |
| **perguntas.json** | Banco de perguntas (EDITE AQUI) |
| **server.js** | Servidor Node.js (opcional) |
| **INICIO-RAPIDO.md** | ⭐ **COMECE AQUI!** |
| **DEPLOY-GITHUB.md** | Como publicar online |
| **INSTRUCOES-RANKING.md** | Ranking em tempo real |
| **LINKS-DE-ACESSO.md** | Links atualizados |

---

## 🎮 Sistema Detecta Automaticamente!

O jogo é inteligente:

```javascript
// No GitHub Pages
→ Ranking salvo localmente (sessionStorage)
→ Funciona sem servidor

// No Servidor Local
→ Ranking em tempo real via Socket.io
→ Atualiza automaticamente em todos os dispositivos
```

Você não precisa mudar NADA no código! 🎉

---

## 🚀 Para Começar AGORA:

### Testar Localmente (sem servidor):
1. Abra `index.html` no navegador
2. Jogue!

### Com Ranking ao Vivo:
1. Execute: `npm start`
2. Abra: `http://localhost:3000/ranking-tv.html`
3. Jogue em: `http://localhost:3000/index.html`

### Publicar Online:
1. Leia: **DEPLOY-GITHUB.md**
2. Execute os comandos Git
3. Compartilhe o link!

---

## 💡 Principais Recursos

✅ **15 perguntas** por partida
✅ **5 matérias:** Matemática, História, Geografia, Português, Artes
✅ **Prêmios:** Até R$ 1.000.000
✅ **3 ajudas:** 50:50, Pular, Cartas
✅ **Timer:** 15 segundos por pergunta
✅ **Loja:** Compre ajudas com moedas
✅ **Ranking:** Local ou em tempo real
✅ **Narração:** Português (Web Speech API)
✅ **Acessibilidade:** VLibras integrado
✅ **Responsivo:** Funciona em qualquer tela

---

## 📝 Personalizar Perguntas

Edite: **perguntas.json**

```json
{
  "matematica": [
    {
      "question": "Quanto é 2 + 2?",
      "answers": ["4", "5", "3", "6"],
      "correctAnswer": "4"
    }
  ]
}
```

Adicione quantas quiser! 🎯

---

## 🎓 Estrutura de Prêmios

| Pergunta | Prêmio | Parada Garantida |
|----------|--------|------------------|
| 1 | R$ 500 | - |
| 2 | R$ 1.000 | - |
| 3 | R$ 2.000 | - |
| 4 | R$ 3.000 | - |
| 5 | R$ 5.000 | ✅ Parada |
| 6 | R$ 10.000 | - |
| 7 | R$ 20.000 | - |
| 8 | R$ 30.000 | - |
| 9 | R$ 50.000 | - |
| 10 | R$ 75.000 | ✅ Parada |
| 11 | R$ 100.000 | - |
| 12 | R$ 200.000 | - |
| 13 | R$ 500.000 | - |
| 14-15 | R$ 1.000.000 | 🏆 Milhão! |

---

## 🛠️ Tecnologias Usadas

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express (opcional)
- **Tempo Real:** Socket.io
- **Narração:** Web Speech API
- **Animações:** Canvas Confetti
- **Acessibilidade:** VLibras

---

## 📞 Suporte

Problemas? Verifique:
1. **Console do navegador** (F12)
2. **Terminal** onde o servidor está rodando
3. **Arquivos de documentação** nesta pasta

---

## 🎉 Pronto para Usar!

Escolha seu modo e comece:

- 🌐 **Online?** → Leia **DEPLOY-GITHUB.md**
- 🏫 **Sala de aula?** → Execute `npm start`
- ❓ **Com dúvida?** → Leia **INICIO-RAPIDO.md**

---

**Desenvolvido para educação** 🎓
**Versão:** 1.0.0
**Data:** Janeiro 2026
