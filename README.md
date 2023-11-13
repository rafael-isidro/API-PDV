<h1 align="center">
    <a href="#" alt="API PDV"> API PDV </a>
</h1>
<h3 align="center">
    Bem-vindo ao projeto da API PDV! Esta é uma API construída para um PDV (Ponto de Venda) que oferece funcionalidades para gerenciar categorias, clientes, pedidos, produtos e usuários.
</h3>

## 💻 Sobre o projeto
Este é um projeto de estudos desenvolvido para o módulo 5 do curso de desenvolvimento da Cubos Academy. O objetivo é construir uma API para um PDV, permitindo operações como cadastro de categorias, clientes, produtos, usuários, além de realizar pedidos.

---

## ⚙️ Funcionalidades
A API PDV oferece as seguintes funcionalidades:

CATEGORIAS:
- Cadastro de Categorias
- Listar Categorias

USUÁRIOS:
- Cadastro de Usuário
- Login de Usuário
- Detalhar Perfil do Usuário Logado
- Editar Perfil do Usuário Logado

PRODUTOS:
- Cadastro de Produto
- Editar Dados do Produto
- Listar Produtos
- Detalhar Produto
- Excluir Produto por ID

CLIENTES:
- Cadastro de Cliente
- Editar Dados do Cliente
- Listar Clientes
- Detalhar Cliente

PEDIDOS:
- Cadastrar Pedido
- Listar Pedidos

---

## ▶️ Como executar o projeto
Pré-requisitos:
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
Git, Node.js.
Além disso, é bom ter um editor para trabalhar com o código como VSCode.

Rodando o Projeto
```bash

# Clone este repositório
$ git clone https://github.com/seu-usuario/seu-repositorio

# Acesse a pasta do projeto no terminal
$ cd seu-repositorio

# Instale as dependências
$ npm install

# Execute o script de criação do banco de dados e tabelas
$ npm run db:init

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor iniciará na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- Node.js
- Express
- PostgreSQL
- bcrypt
- jsonwebtoken
- multer
- nodemailer
- backblaze (ou algum outro serviço para armazenamento de imagem)

---

## 🧱 Estrutura do Projeto

```sh
.
├── src
│   ├── config
│   │   └── conexao_DB.js
│   ├── controladores
│   │   ├── index.js
│   │   ├── categoria.controladores.js
│   │   ├── cliente.controladores.js
│   │   ├── login.controladores.js
│   │   ├── pedido.controladores.js
│   │   ├── produto.controladores.js
│   │   └── usuario.controladores.js
│   ├── esquemas
│   │   ├── index.js
│   │   ├── cliente.esquemas.js
│   │   ├── login.esquemas.js
│   │   ├── pedido.esquemas.js
│   │   ├── produto esquemas.js
│   │   └── usuario.esquemas.js
│   ├── intermediarios
│   │   ├── index.js
│   │   ├── multer.js
│   │   ├── validaCorpoRequisicao.js
│   │   ├── verificaDadosCliente.js
│   │   ├── verificaDadosPedido.js
│   │   ├── verificaEmail.js
│   │   ├── verificald.js
│   │   ├── verificaLogin.js
│   │   └── verificaToken.js
│   ├── repositorios
│   │   ├── index.js
│   │   ├── categoria.repositorios.js
│   │   ├── cliente.repositorios.js
│   │   ├── pedido.repositorios.js
│   │   ├── produto.repositorios.js
│   │   └── usuario.repositorios.js
│   ├── rotas
│   │   ├── index.js
│   │   ├── categoria.rotas.js
│   │   ├── cliente.rotas.js
│   │   ├── login.rotas.js
│   │   ├── pedido.rotas.js
│   │   ├── produto.rotas.js
│   │   └── usuario.rotas.js
│   ├── servicos
│   │   ├── index.js
│   │   ├── categoria.servicos.js
│   │   ├── cliente.servicos.js
│   │   ├── login.servicos.js
│   │   ├── pedido.servicos.js
│   │   ├── produto.servicos.js
│   │   └── usuario.servicos.js
│   ├── templates
│   │   └── email.html
│   ├── utilitarios
│   │   ├── index.js
│   │   ├── backBlaze.js
│   │   ├── nodeMailer.js
│   ├── dump.sql
│   ├── erros.js
│   └── index.js
├── .editorconfig
├── .env.exemplo
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── package-lock.json
└── package.json


```
