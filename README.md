# Teste Morada
> ## Requisitos

  - [Imóveis](./docs/requirements/properties.md)

> ## Estrutura do Projeto

  ```bash
├── __test__  # Testes
├── dist  # Arquivos compilados com o script de build
├── docs  # Documentação da aplicação
├── src   # Código fonte
  ├── core  # Regras de negócio da aplicação
  │   ├── entities  # Modelos 
  │   ├── protocols # Protocolos para inversão de dependências
  │   └── services  # Casos de uso (interfaces abstratas, implementadas nos controllers e nos repositórios)
  ├── data  # Implementação das funções de dados
  │   ├── controllers # Controladores, utilizados nas rotas
  │   ├── helpers # Funções de ajuda para a camada de dados
  │   ├── middlewares # Route middlewares
  │   └── repositories # Implementação do Prisma, seguindo as regras de negócio dos serviços
  └── main  # Camada exterior da aplicação, factories e adapters ficam aqui
      ├── adapters # Adapters para implementação concreta das interfaces, seguindo as regras de negócios dos protocolos
      ├── client  # Configuração do Prisma
      ├── config  # Configuração do express
      ├── factories # Onde são gerados os métodos a partir das classes, utilizando a factory pattern
      ├── middlewares # Express middlewares
      └── server.ts # Ponto de início da aplicação
```

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

### Rodando a aplicação:

```bash
# build
$ yarn run build

# desenvolvimento
$ yarn run dev

# modo produção
$ yarn run start
```

### Testes:

```bash
# testes unitários
$ yarn run test

# testes coverage
$ yarn run test:ci
```