Mini Projeto 4 - API para Inclusão Digital
Descrição
Este projeto é uma API desenvolvida para promover a inclusão digital e fornecer informações e recursos úteis para diversos públicos. A API oferece funcionalidades como sugestões de cursos gratuitos, dados sobre acessibilidade digital e dicas de alfabetização digital.

Funcionalidades
A API contém três rotas principais:

Sugestões de Cursos Gratuitos

Endpoint: /api/courses/free
Descrição: Retorna uma lista de cursos gratuitos disponíveis online para promover a educação digital.
Dados sobre Acessibilidade Digital

Endpoint: /api/accessibility/data
Descrição: Fornece dados e estatísticas sobre acessibilidade digital, ajudando a entender a importância de tornar a tecnologia acessível para todos.
Dicas de Alfabetização Digital

Endpoint: /api/digital-literacy/tips
Descrição: Oferece dicas e melhores práticas para melhorar a alfabetização digital, ajudando as pessoas a navegar e utilizar a internet de maneira eficaz e segura.


Estrutura do Projeto

mini-projeto-4/
├── src/
│   ├── controllers/
│   │   ├── coursesController.js
│   │   ├── accessibilityController.js
│   │   └── digitalLiteracyController.js
│   ├── routes/
│   │   ├── coursesRoutes.js
│   │   ├── accessibilityRoutes.js
│   │   └── digitalLiteracyRoutes.js
│   ├── app.js
│   └── server.js
├── package.json
└── README.md

Todas as Rotas:

Sugestões de Cursos Gratuitos:
http://localhost:3000/api/courses/free


Dados sobre Acessibilidade Digital:

curl http://localhost:3000/api/accessibility/data


Dicas de Alfabetização Digital:

curl http://localhost:3000/api/digital-literacy/tips


Instalação e Execução

Pré-requisitos

Node.js instalado
npm instalado

Passos de Instalação

Clone o repositório: git clone https://github.com/kauawilldm/mini-projeto-4.git

Navegue até o diretório do projeto: cd mini-projeto-4

Instale as dependências: npm install

Passos de Execução

Navegue até o diretório src: cd src

Inicie o servidor: node server.js

O servidor estará em execução na porta 3000. Então é só acessar as rotas usando um navegador ou uma ferramenta como Postman.