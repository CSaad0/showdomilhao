# 🎮 GUIA RÁPIDO - Show do Milhão

## 🌐 OPÇÃO 1: Jogar Online (GitHub Pages)

### Para Alunos Jogarem Individualmente

```
1. Publique no GitHub Pages (veja DEPLOY-GITHUB.md)
2. Compartilhe o link: https://csaad0.github.io/show-do-milhao/
3. Cada aluno joga no próprio celular/tablet
4. Ranking é individual (não compartilhado)
```

**Vantagens:**
✅ Não precisa de servidor
✅ Funciona de qualquer lugar
✅ Fácil de compartilhar (link ou QR Code)

**Desvantagens:**
❌ Sem ranking em tempo real entre jogadores

---

## 🏫 OPÇÃO 2: Sala de Aula (Ranking ao Vivo)

### Para Competição com Múltiplos Tablets

```
1. No notebook, execute: npm start (ou clique em INICIAR-SERVIDOR.bat)
2. Descubra seu IP: ipconfig (procure IPv4, ex: 192.168.1.14)
3. Na TV/projetor, abra: http://192.168.1.14:3000/ranking-tv.html
4. Nos tablets dos alunos: http://192.168.1.14:3000/index.html
5. Jogue e veja o ranking atualizar em tempo real! 🎉
```

**Vantagens:**
✅ Ranking em tempo real na TV
✅ Competição entre alunos
✅ Visual profissional
✅ Animações ao vivo

**Desvantagens:**
❌ Precisa de servidor local
❌ Todos devem estar na mesma rede WiFi

---

## ⚡ INÍCIO RÁPIDO

### Primeira vez (instalar):
```bash
npm install
```

### Toda vez que for usar:
```bash
npm start
```

**OU** clique duplo em: `INICIAR-SERVIDOR.bat`

---

## 📱 Descobrir IP do Notebook

**Windows:**
```bash
ipconfig
```
Procure: `Endereço IPv4. . . . . : 192.168.1.14`

**Mac/Linux:**
```bash
ifconfig
```

---

## 🎯 Qual Opção Escolher?

| Situação | Recomendação |
|----------|--------------|
| Lição de casa | GitHub Pages (Opção 1) |
| Jogo individual | GitHub Pages (Opção 1) |
| Compartilhar com amigos | GitHub Pages (Opção 1) |
| Competição em sala | Servidor Local (Opção 2) |
| Gincana escolar | Servidor Local (Opção 2) |
| Múltiplos tablets | Servidor Local (Opção 2) |

---

## 🆘 Problemas Comuns

### "npm não é reconhecido"
➡️ Instale o Node.js: https://nodejs.org/

### "Não consigo acessar do tablet"
➡️ Verifique se estão na mesma rede WiFi
➡️ Verifique o IP com `ipconfig`
➡️ Tente desativar o firewall temporariamente

### "Ranking não atualiza"
➡️ Recarregue a página (F5)
➡️ Verifique se o indicador está verde (conectado)

### "Música não toca"
➡️ Clique em qualquer lugar da tela primeiro
➡️ Navegadores bloqueiam autoplay

---

## 📚 Documentação Completa

- **DEPLOY-GITHUB.md** - Como publicar online
- **INSTRUCOES-RANKING.md** - Detalhes do ranking ao vivo
- **LINKS-DE-ACESSO.md** - Links de acesso atualizados
- **README.md** - Informações gerais do projeto

---

## 🎓 Dicas para Professores

1. **Teste antes:** Rode localmente antes da aula
2. **Prepare o ambiente:** Notebook conectado, servidor rodando
3. **QR Code:** Crie um para facilitar acesso dos alunos
4. **Tela cheia:** Use F11 no ranking para melhor visualização
5. **Backup:** Tenha o GitHub Pages como plano B

---

**Bom jogo! 🎮🏆**
