 const document = {
    "swagger": "2.0",
    "info": {
      "title": "API Youtube Search",
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
    "basePath": "/",
    "tags": [
      {
        "name": "youtube",
        "description": ""
      }
    ],
    "schemes": [
        "http",
        "https",
      ],
    "paths": {
      "/youtube/{search}":{
        "get": {
          "tags": [
            "youtube"
          ],
          "summary": "Procura os Videos do Youtube",
          "description": "",
          "parameters": [
            {
              "in": "path",
              "name": "search",
              "description": "",
              "required": false
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
            },
            "400": {
              "description": "Bad Request",
            }
          }
        },
      }
    },
    "definitions": {
     
    }
  }
  

 export {document}