# Importar imóveis

> ## Caso de sucesso:

- [x] Recebe uma requisição do tipo **POST** na rota **/api/properties**
- [x] Realiza a leitura a planilha e transforma os dados em JSON
- [x] **Adiciona** os imóveis na tabela do banco de dados
- [x] Retorna **200** com o número de imóveis adicionados ao banco de dados

> ## Exceções: 

- [x] Retorna **404** se o endpoint não existir
- [x] Retorna **500** se a planilha não puder ser lida
- [x] Retorna **500** se os imóveis não forem adicionados com sucesso