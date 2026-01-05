# 🚀 Como Colocar no GitHub Pages

## 📋 O Jogo Funciona em DOIS MODOS:

### 🌐 Modo GitHub Pages (Online - Sem Servidor)
- ✅ Jogo funciona perfeitamente
- ✅ Ranking local (por sessão do navegador)
- ❌ Ranking em tempo real entre dispositivos (não disponível)
- 📱 Ideal para: Jogar individualmente online

### 💻 Modo Local (Com Servidor Node.js)
- ✅ Jogo funciona perfeitamente
- ✅ Ranking em tempo real entre tablets
- ✅ TV/Notebook exibe ranking ao vivo
- 🏫 Ideal para: Sala de aula com múltiplos tablets

---

## 🎯 PASSO A PASSO - GitHub Pages

### 1️⃣ Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `show-do-milhao`
3. Marque como **Público**
4. NÃO adicione README, .gitignore ou license
5. Clique em **Create repository**

---

### 2️⃣ Enviar Arquivos para o GitHub

Abra o PowerShell nesta pasta e execute:

```powershell
# Inicializa o repositório Git
git init

# Adiciona todos os arquivos (exceto node_modules)
git add .

# Faz o primeiro commit
git commit -m "Show do Milhão - Versão inicial"

# Conecta ao seu repositório (SUBSTITUA SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/show-do-milhao.git

# Envia para o GitHub
git push -u origin main
```

**Se der erro "main", tente:**
```powershell
git branch -M main
git push -u origin main
```

---

### 3️⃣ Ativar GitHub Pages

1. No seu repositório, clique em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione: `main` branch
4. Clique em **Save**
5. Aguarde 1-2 minutos

Seu jogo estará disponível em:
```
https://SEU-USUARIO.github.io/show-do-milhao/
```

---

### 4️⃣ Arquivos que DEVEM Subir no GitHub

✅ **SIM - Enviar:**
- index.html
- jogo.html
- ranking-tv.html
- perguntas.json
- style.css
- README.md
- *.mp3 (músicas e efeitos sonoros)
- *.png (imagens)

❌ **NÃO - NÃO Enviar:**
- node_modules/ (pasta grande, não é necessária no GitHub Pages)
- server.js (não funciona no GitHub Pages)
- package.json (não é necessário)
- package-lock.json (não é necessário)

---

### 5️⃣ Criar .gitignore

Crie um arquivo chamado `.gitignore` com:

```
node_modules/
package-lock.json
*.log
.DS_Store
```

---

## 🔄 Como Atualizar o Jogo no GitHub

Depois de fazer alterações:

```powershell
git add .
git commit -m "Descrição das mudanças"
git push
```

Aguarde 1-2 minutos e as mudanças estarão online!

---

## 🎓 Usando em Sala de Aula - DUAS OPÇÕES:

### Opção A: GitHub Pages (Simples, mas sem ranking ao vivo)
- Alunos acessam: `https://seu-usuario.github.io/show-do-milhao/`
- Cada um joga individualmente
- Ranking apenas local (não compartilhado)

### Opção B: Servidor Local (Ranking ao vivo!)
1. Baixe o projeto do GitHub
2. Execute `npm install`
3. Execute `node server.js`
4. Tablets acessam: `http://IP-DO-SEU-PC:3000/index.html`
5. TV exibe: `http://IP-DO-SEU-PC:3000/ranking-tv.html`

---

## 🆘 Solução de Problemas

### Erro: "fatal: not a git repository"
```powershell
git init
```

### Erro: "failed to push"
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### GitHub Pages não atualiza
- Aguarde 2-5 minutos
- Limpe o cache do navegador (Ctrl+Shift+R)
- Verifique se o branch está correto (main)

### Arquivos de áudio não tocam
- Verifique se os arquivos .mp3 foram enviados
- Alguns navegadores bloqueiam autoplay
- Clique na tela para iniciar o áudio

---

## 📱 Compartilhar o Jogo

Depois de publicar, você pode:

1. **Enviar o link:** `https://seu-usuario.github.io/show-do-milhao/`

2. **Criar QR Code:**
   - Acesse: https://www.qr-code-generator.com/
   - Cole o link do jogo
   - Baixe o QR Code
   - Alunos escaneiam com o celular

3. **Encurtar URL:**
   - Acesse: https://bitly.com/
   - Cole o link do jogo
   - Crie um link curto tipo: `bit.ly/show-milhao-2026`

---

## 🎮 Testando Local Antes de Enviar

Para testar localmente sem servidor:

1. Abra `index.html` direto no navegador
2. Funciona! (mas sem ranking em tempo real)

Para testar com ranking ao vivo:

1. Execute `node server.js`
2. Acesse `http://localhost:3000/index.html`

---

## 📊 Estatísticas GitHub

Depois de publicar, você pode ver:
- Quantas pessoas visitaram
- De onde acessaram
- Quando acessaram

Vá em: **Settings** → **Pages** → **View traffic**

---

## 💡 Dicas

1. **Nome de usuário do GitHub** deve ser sem espaços
2. **Repositório público** é necessário para GitHub Pages gratuito
3. **Arquivos grandes** (>100MB) podem ter problemas
4. **HTTPS** é automático no GitHub Pages
5. **Domínio customizado** pode ser configurado (ex: show-milhao.com.br)

---

## 🔗 Links Úteis

- GitHub: https://github.com
- GitHub Pages: https://pages.github.com
- QR Code Generator: https://www.qr-code-generator.com
- Bitly: https://bitly.com

---

**Pronto!** 🎉 Seu jogo estará online e acessível de qualquer lugar!

Para sala de aula com tablets, use a **Opção B** com servidor local.
Para jogar online individualmente, use **GitHub Pages**.
