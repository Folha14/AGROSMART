# AGROSMART (Sistema de Gestão Agrícola Inteligente)

## Descrição

**AgroSmart** é um sistema inteligente de gestão agrícola focado em viticultura, construído com backend em Python Flask e frontend em React. O sistema recolhe dados meteorológicos em tempo real via API OpenWeatherMap e fornece recomendações de irrigação baseadas em análise contínua das condições meteorológicas.

## Funcionalidades Principais

- **Monitorização em Tempo Real:** 
  - Temperatura e humidade atualizadas a cada 5 minutos
  - Notificações automáticas de condições críticas
  - Histórico de dados meteorológicos

- **Recomendações Inteligentes:**
  - Análise automática de condições para viticultura
  - Sugestões de irrigação personalizadas
  - Alertas de riscos (doenças fúngicas, stress térmico)

- **Segurança:**
  - Autenticação básica para todas as rotas da API
  - Proteção de dados sensíveis
  - Gestão de sessões de usuário

- **Interface Moderna:**
  - Dashboard interativo em React
  - Atualizações em tempo real via WebSocket
  - Design responsivo e intuitivo

## Requisitos do Sistema

### Backend
- Python 3.10+
- Flask 2.0.1
- Flask-SocketIO 5.1.1
- Outras dependências em `backend/requirements.txt`

### Frontend
- Node.js 14+
- React 17
- TypeScript 4.9+
- Dependências listadas em `frontend/package.json`

## Configuração Rápida

### 1. Backend (Python/Flask)

```bash
# Clone o repositório
git clone https://github.com/Folha14/AGROSMART.git
cd AGROSMART/backend

# Crie e ative o ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Instale as dependências
pip install -r requirements.txt

# Configure as variáveis de ambiente
cp .env.example .env
# Edite .env com sua chave API do OpenWeatherMap

# Execute o servidor
python app.py
```

### 2. Frontend (React/TypeScript)

```bash
# Na pasta do frontend
cd ../frontend

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm start
```

## Estrutura do Projeto

```
AGROSMART/
│
├── backend/                
│   ├── app.py             # Aplicação Flask principal
│   ├── src/
│   │   ├── services/      # Serviços de negócio
│   │   ├── storage/       # Gestão de dados
│   │   └── utils/         # Utilitários
│   ├── data/              # Armazenamento JSON
│   └── tests/             # Testes unitários
│
├── frontend/              
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── services/      # Serviços API
│   │   ├── pages/         # Páginas principais
│   │   └── types/         # Tipos TypeScript
│   └── public/
│
└── docs/                  # Documentação adicional
```

## API Endpoints

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| POST | `/api/login` | Autenticação de usuário | Não |
| GET | `/api/weather` | Dados meteorológicos atuais | Sim |
| GET | `/api/recommendations` | Recomendações de irrigação | Sim |
| GET | `/api/history/weather` | Histórico meteorológico | Sim |
| GET | `/api/notifications` | Notificações ativas | Sim |
| DELETE | `/api/notifications` | Limpar notificações | Sim |

## WebSocket Events

- `weather_update`: Recebe atualizações meteorológicas em tempo real
- `notification`: Recebe novas notificações

## Contribuições

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Equipa

- Guilherme Mota - Backend/DevOps
- Diogo A. - Frontend/UX
- José Folha - Backend/DevOps

## Licença

Este projeto é apenas para fins académicos e não pode ser usado comercialmente.

---

> **Nota:** Este projeto é parte de um trabalho académico e está em constante desenvolvimento.