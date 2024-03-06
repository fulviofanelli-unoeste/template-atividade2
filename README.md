# Atividade 2 - PFSII
Nessa atividade iremos implementar uma API RESTful que consome uma outra API


## Consumindo uma API
Através do Node podemos consumir uma API utilizando a função fetch e a keyword await. Conforme vimos durante a disciplina de fullstack I, a função fetch funciona no formato de Promises, então podemos utilizar async/await para aguardar a response e com ela realizar um response.json() para obter o corpo da resposta. Exemplo:</br>
let response = await fetch('endereco-api-a-ser-consumida');
let dados = await = response.json();

## Qual API vamos consumir?
Para nossa atividade vamos utilizar a API que disponibiliza os dados da FIPE, a documentação pode ser encontrada abaixo: </br>
https://documenter.getpostman.com/view/7064033/SWT5jMGk#0efe83b5-d24c-40f9-b85d-d83426953a5f</br>

Implemente as consultas à API da tabela FIPE na camada de modelos

## Endpoints a serem implementados

- Consulta de marcas de carros</br>

- Consulta de modelos de uma determinada marca</br>

- Consulta de anos de um determinado modelo de uma determinada marca</br>

- Consulta de informações do ano de um determinado modelo de uma determinada marca</br></br>

Todos os esses endpoints deverão estar devidamente documentados em uma rota do sistema que deve se chamar /documentacao. A documentação deverá conter:</br>
- Tag </br>
- Sumário </br>
- Parâmetros </br>
- Códigos de retorno </br></br>

Além disso, implemente também um esquema de segurança para proteger nossos endpoints. O token da nossa api deverá ser enviado via cabeçalho da requisição e validado para conferir se a requisição pode continuar ou não
