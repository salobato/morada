# Importar imóveis

> ## Caso de sucesso:

- [x] Recebe uma requisição do tipo **POST** na rota **/properties**
- [x] Realiza a leitura a planilha e transforma os dados em JSON
- [x] **Adiciona** os imóveis na tabela do banco de dados
- [x] Retorna **200** com o número de imóveis adicionados ao banco de dados

> ## Exceções: 

- [x] Retorna **404** se o endpoint não existir
- [x] Retorna **500** se a planilha não puder ser lida
- [x] Retorna **500** se os imóveis não forem adicionados com sucesso

# Listar imóveis

> ## Caso de sucesso:

- [x] Recebe uma requisição do tipo **GET** na rota **/properties**
- [x] Retorna **200** com o todos os imóveis cadastrados no banco de dados

> ## Exceções: 

- [x] Retorna **404** se o endpoint não existir
- [x] Retorna **204** se não existirem imóveis cadastrados
- [x] Retorna **500** se os imóveis não forem lidos com sucesso

# Listar imóveis por cidade

> ## Caso de sucesso:

- [x] Recebe uma requisição do tipo **GET** na rota **/propertiesByCity/:city**
- [x] Retorna **200** com o todos os imóveis cadastrados no banco de dados que se encontram na cidade pesquisada

> ## Exceções: 

- [x] Retorna **404** se o endpoint não existir
- [x] Retorna **204** se não existirem imóveis cadastrados que se encontram na cidade pesquisada
- [x] Retorna **500** se os imóveis não forem lidos com sucesso

# Listar imóveis por data de previsão final

> ## Caso de sucesso:

- [x] Recebe uma requisição do tipo **GET** na rota **/propertiesByEndDate/:criteria/:months** (o parâmetro criteria pode ser, de acordo com os casos de uso e a API do Prisma: lt, lte, gt, gte)
- [x] Retorna **200** com o todos os imóveis cadastrados no banco de dados que se encontram na janela de data pesquisada

> ## Exceções: 

- [x] Retorna **404** se o endpoint não existir
- [x] Retorna **204** se não existirem imóveis cadastrados que se encontram na janela de data pesquisada
- [x] Retorna **500** se os imóveis não forem lidos com sucesso