 const document = {
    "swagger": "2.0",
    "info": {
      "title": "API BISHOP",
      "description": null,
      "termsOfService": "http://swagger.io/terms/",
      "contact": {
        "email": "apiteam@swagger.io"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      "version": "1.0.11"
    },
    "host": "localhost",
    "basePath": "api/v1",
    "tags": [
      {
        "name": "pedidos",
        "description": ""
      }
    ],
    "schemes": [
        "http",
        "https",
      ],
    "paths": {
      "/pedidos/markdelivered":{
        "put": {
          "tags": [
            "pedidos"
          ],
          "summary": "Atualiza os Pedidos pra recebidos",
          "description": "",
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Pedidos object",
              "required": true,
              "schema": {
                "$ref": "#/definitions/PedidosPutDelivered"
              }
            }
          ],
          "responses": {
            "default": {
              "description": "successful operation",
            },
            "400": {
              "description": "Bad Request",
            }
          }
        },
      },
      "/pedidos": {
      
        "post": {
          "tags": [
            "pedidos"
          ],
          "summary": "Cria um novo Pedido",
          "description": "Adiciona os dados do pedido no banco da BISHOP",
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Pedido object",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Pedido"
              }
            }
          ],
          "responses": {
            "default": {
              "description": "successful operation",
            },
            "400": {
              "description": "Bad Request",
            }
          }
        },
        "get": {
          "tags": [
            "pedidos"
          ],
          "summary": "Recupera os pedidos",
          "description": "Recupera os pedidos ainda não baixados pela bishop",
          "responses": {
            "200": {
              "description": "successful operation",
            },
            "500": {
              "description": "Internal Server Error",
            }
          }
        }
      },
    },
    "definitions": {
      "Pedido": {
        "type": "object",
        "properties": {
          "cnpj": {
            "type": "string",
          },
          "codigoEntrega": {
            "type": "number",
          },
          "codigoSecao": {
            "type": "number",
          },
          "cep": {
            "type": "string",
          },
          "bairro": {
            "type": "string",
          },
          "endereco": {
            "type": "string",
          },
          "numero": {
            "type": "string",
          },
          "cidade": {
            "type": "string",
          },
          "uf": {
            "type": "string",
          },
          "pontoReferencia":{
            "type": "string",
          },
          "obs":{
            "type": "string",
          },
          "cliente": {
            "type": "object",
            "properties": {
              "codigo":{
                "type":"number"
              },
              "nome":{
                "type":"string"
              },
              "telefone":{
                "type":"string"
              },
              
            }
          },
          "valorTotal": {
            "type": "number",
          },
          "valorDesconto": {
            "type": "number",
          },
          "valorTaxa": {
            "type": "number",
          },
          "dataPedido": {
            "type": "string",
          },
          "horaPedido": {
            "type": "string",
          },
          "entregador": {
            "type": "object",
            "properties": {
              "codigo":{
                "type":"number"
              },
              "nome":{
                "type":"string"
              }
            }
          },
          "status": {
            "type": "string",
          },

          "items":{
            "type" : "array",
            "items" : {
              "$ref" : "#/definitions/Item"
            }
          }

        },
      },
      "Item": {
        "type": "object",
        "properties": {
          "codigo": {
            "type": "number",
          },
          "obs": {
            "type": "string",
          },
          "desc": {
            "type": "string",
          },
          "unidadeMedida": {
            "type": "string",
          },
          "qtd": {
            "type": "number",
          },
          "valorDesconto": {
            "type": "number",
          },
          "valorUnitario": {
            "type": "number",
          },
          "percentualDesconto": {
            "type": "number",
          },
        },
      },
      "PedidosPutDelivered": {
        "type": "object",
        "properties": {
          "pedidos":{
            "type" : "array",
            "items" : {
              "$ref" : "#/definitions/PedidoUpdateDelivered"
            }
          }

        },
      },
      "PedidoUpdateDelivered": {
        "type": "object",
        "properties": {
          "codigoSecao": {
            "type": "number",
          },
          "codigoEntrega": {
            "type": "number",
          },
          "cnpj": {
            "type": "string",
          },
        }
      }
    }
  }
  

  module.exports = {
    document
  }