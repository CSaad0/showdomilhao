#!/bin/bash

echo "🎮 Show do Milhão - Inicialização Rápida"
echo "========================================"
echo ""

# Verifica se Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "❌ Node.js não está instalado!"
    echo "📥 Baixe em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo ""

# Verifica se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
    echo ""
fi

echo "🚀 Iniciando servidor..."
echo ""
echo "╔════════════════════════════════════════════════╗"
echo "║            SERVIDOR SERÁ INICIADO              ║"
echo "╠════════════════════════════════════════════════╣"
echo "║                                                ║"
echo "║  📱 Jogadores: http://localhost:3000          ║"
echo "║  📺 Ranking: http://localhost:3000/ranking-tv ║"
echo "║                                                ║"
echo "║  Pressione Ctrl+C para parar                   ║"
echo "║                                                ║"
echo "╚════════════════════════════════════════════════╝"
echo ""

node server.js
