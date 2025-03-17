# API de Consulta de Clima

Esta é uma API simples construída com Express.js para consultar as condições climáticas de uma cidade utilizando a OpenWeather API.

## Endpoints

### `GET /weather`

### Utilize algo como http://localhost:3000/weather?São%20Paulo

Consulta o clima de uma cidade específica.

#### Parâmetros

- **city** (obrigatório): Nome da cidade para a qual deseja obter a previsão do tempo.

#### Resposta

A resposta será um objeto JSON com as seguintes informações:

- **actuallyTime**: Descrição do clima (ex: "céu limpo", "chuva leve", etc.).
- **temperature**: Temperatura atual em graus Celsius.
- **humidity**: Humidade atual (em %).
- **windForce**: Velocidade do vento (em metros por segundo).

#### Exemplo de Resposta

```json
{
  "actuallyTime": "céu claro",
  "temperature": 28.5,
  "humidity": 60,
  "windForce": 5.2
}
