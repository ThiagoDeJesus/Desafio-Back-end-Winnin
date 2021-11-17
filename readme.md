# Desafio Back-end

## O que é isso?

<strong>Esse repositório tem como objetivo resolver o seguinte desafio</strong>:

"O desafio consiste em criar um programa que consulte a api do reddit uma vez por dia (deve ser uma tarefa agendada para rodar em um horário específico que você definir).

A sua tarefa diária deve salvar num banco de dados SQL as postagens que estejam HOT do subredit artificial.

Você deve salvar título da postagem, nome do autor, timestamp da criação, número de "ups" e número de comentários, e criar dois endpoints para consulta desses dados (endpoints REST ou usando graphql).

O primeiro endpoint deve receber como parâmetro uma data inicial, uma data final e uma ordem (as ordens possíveis são número de "ups" e número de comentários) e deve retornar as postagens criadas dentro desse range seguindo a ordem estipulada (em ordem decrescente)

O segundo endpoint deve receber como parâmetro uma ordem (as ordens possíveis são número de "ups" e número de comentários) e deve retornar uma lista de usuários seguindo a ordem estipulada (em ordem decrescente)"

## Quais tecnologias foram usadas?

  Esse template contem:
  - [Nodejs](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Prisma](https://www.prisma.io/)
  - [Docker](https://www.docker.com/)
  - [Eslint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Jest](https://jestjs.io)
  - [Swagger](https://swagger.io)

## 🚀 Como executar

- Clone o repositório e acesse a pasta;
- Faça uma copia dos dados em `.env.example` para `.env` e para `.env.test`;
- Instale as dependências com `yarn` ou `npm install`;
- Suba o banco de dados de desenvolvimento com `yarn docker:up` ou `npm run docker:up`;
- Executa as migrations com `npx prisma migrate dev`;
- Inicie o servidor com `yarn dev` ou `npm run dev`;

O servidor estará rodando em http://localhost:4000. Para acessar a documentação das rotas basta ir em http://localhost:4000/api-docs.

A api está configurada para salvar os posts do reddit diariamente às 00:00 , isso pode ser alterado na linha 26 do arquivo app.ts

Feito com 💜 by [Thiago Ramos](https://www.linkedin.com/in/ramos-thiago/) 👋🏻