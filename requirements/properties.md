# Importar planilha

> ## Caso de sucesso:

- [ ] Recebe uma requisição do tipo **POST** na rota **/api/properties**
- [ ] Realiza a leitura a planilha e transforma os dados em JSON
- [ ] **Adiciona** os imóveis na tabela do banco de dados
- [ ] Retorna **200** com o número de imóveis adicionados ao banco de dados

> ## Exceções: 

- [ ] Retorna **404** se o endpoint não existir
- [ ] Retorna **500** se a planilha não puder ser lida
- [ ] Retorna **500** se os imóveis não forem adicionados com sucesso