# Teste Morada
> ## Requisitos

  - [Imóveis](./docs/requirements/properties.md)

> ## Ferramentas utilizadas:
 - TypeScript
 - Node.js
 - Express
 - Prisma
 - ESLint
 - Prettier
 - xlsx
 - multer
 - jest
 - yarn
 - Insomnia (Export da configuração usada para os testes [aqui](./docs/Insomnia.json))

> ## Instruções para execução:
 
### Clonar o repositório:

```bash
$ git clone github.com/salobato/morada.git
```
  
### Instalar dependências:

```bash
$ yarn install
```

## Rodando a aplicação:

```bash
# build
$ yarn run build

# desenvolvimento
$ yarn run dev

# modo produção
$ yarn run start
```

## Testes:

```bash
# testes unitários
$ yarn run test

# testes coverage
$ yarn run test:ci
```