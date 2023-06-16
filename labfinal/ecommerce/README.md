# Eccomerce


## Run Application

```
npm run server.js
```

## Description
The application is used to manage different products, create carts and orders


## Application guest flow

<img src="/labFinal/ecommerce/assets/guest_flow.png"/>

## Product endpoints 

### List of Products

| Path         		        | /api/v1/products                  |
|---------------------------|-----------------------------------|
| HTTP Method 				| GET                               |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |

Returns list of products

examples:
* Request
```
curl --location 'http://localhost:8000/api/v1/products'
```
you can add different query params in order to filter the list of products like:

* Request using Pagination
```
curl --location 'http://localhost:8000/api/v1/products?limit=10&page=1'
```

* Request filtering by name and sorting it descendent
```
curl --location 'http://localhost:8000/api/v1/products?name=s&sort=desc'
```

### Retrieve Product by Id
| Path         		        | /api/v1/products/{productId}      |
|---------------------------|-----------------------------------|
| HTTP Method 				| GET                               |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| guest/admin                       |

example:
```
curl --location 'http://localhost:8000/api/v1/products/648ba2dd3074cf94153b1d9b'
```

### Add new product
| Path         		        | /api/v1/products                  |
|---------------------------|-----------------------------------|
| HTTP Method 				| POST                              |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| admin                             |

example:
```
curl --location 'http://localhost:8000/api/v1/products' \
--header 'Content-Type: application/json' \
--data '    {
        "name": "tenis",
        "description": "test",
        "price": 10000,
        "category":"test",
        "quantity": 100
    }'
```

### Modify product
| Path         		        | /api/v1/products/{productId}      |
|---------------------------|-----------------------------------|
| HTTP Method 				| PUT                               |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| admin                             |

example:
```
curl --location --request PUT 'http://localhost:8000/api/v1/products/192660bf-5e99-49da-ac0e-5e68c4ca22c6' \
--header 'Content-Type: application/json' \
--data '    {
        "name": "buzo",
        "description": "test",
        "price": 2000,
        "category":"test",
        "quantity":"test"
    }'
```

### Delete product
The endpoint remove 
| Path         		        | /api/v1/products/{productId}       |
|---------------------------|-----------------------------------|
| HTTP Method 				| DELETE                            |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| admin                             |

example:
```
curl --location --request DELETE 'http://localhost:8000/api/v1/products/192660bf-5e99-49da-ac0e-5e68c4ca22c6'
```

## User endpoints 

### List of Users
| Path         		        | /api/v1/users                     |
|---------------------------|-----------------------------------|
| HTTP Method 				| GET                               |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| admin                             |

Returns the list of users

examples:
* Request
```
curl --location 'http://localhost:8000/api/v1/users'
```
you can add different query params in order to filter the list of users like:

* Request using Pagination
```
curl --location 'http://localhost:8000/api/v1/users?limit=10&page=1'
```

* Request filtering by name and sorting it descendent
```
curl --location 'http://localhost:8000/api/v1/users?name=test&sort=desc'
```

### Add new user
| Path         		        | /api/v1/users                     |
|---------------------------|-----------------------------------|
| HTTP Method 				| POST                              |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |
| scope                  	| admin                             |

example:
```
curl --location 'http://localhost:8000/api/v1/users' \
--header 'Content-Type: application/json' \
--data '    {
        "firstName": "testName2",
        "lastName": "testLN",
        "username": "test123",
        "password": "123"
    }'
```

### Retrieve user by Id
| Path         		        | /api/v1/users/{userId}            |
|---------------------------|-----------------------------------|
| HTTP Method 				| GET                               |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| guest/admin                       |

example:
```
curl --location 'http://localhost:8000/api/v1/users/648ba2dd3074cf94153b1d9b'
```

### Modify user
| Path         		        | /api/v1/users/{userId}            |
|---------------------------|-----------------------------------|
| HTTP Method 				| PUT                               |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| guest/admin                       |

example:
```
curl --location --request PUT 'http://localhost:8000/api/v1/users/5' \
--header 'Content-Type: application/json' \
--data '    {
        "firstName": "testName45",
        "lastName":"test"
    }'
```

### Delete users
The endpoint remove 
| Path         		        | /api/v1/products/{userId}         |
|---------------------------|-----------------------------------|
| HTTP Method 				| DELETE                            |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| admin                             |

example:
```
curl --location --request DELETE 'http://localhost:8000/api/v1/users/192660bf-5e99-49da-ac0e-5e68c4ca22c6'
```

## Carts endpoints

### List of Carts
| Path         		        | /api/v1/carts                     |
|---------------------------|-----------------------------------|
| HTTP Method 				| GET                               |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| admin                             |

Returns list of carts

examples:
* Request
```
curl --location 'http://localhost:8000/api/v1/orders'
```
you can add different query params in order to filter the list of carts like:

* Request using Pagination
```
curl --location 'http://localhost:8000/api/v1/orders?limit=10&page=1'
```

### Retrieve Cart by Id

| Path         		        | /api/v1/carts/{cartId}            |
|---------------------------|-----------------------------------|
| HTTP Method 				| GET                               |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |

example
```
curl --location 'http://localhost:8000/api/v1/carts/648a4b7ee282dca658f180ca'
``` 


#### Create Cart
| Path         		        | /api/v1/carts                     |
|---------------------------|-----------------------------------|
| HTTP Method 				| POST                              |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |

example:
```
curl --location --request POST 'http://localhost:8000/api/v1/carts'
```

Returns Cart Id

### Update Cart Items

| Path         		        | /api/v1/carts/{cartId}            |
|---------------------------|-----------------------------------|
| HTTP Method 				| PUT                               |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |

example:
```
curl --location --request PUT 'http://localhost:8000/api/v1/carts/648a4b7ee282dca658f180ca' \
--header 'Content-Type: application/json' \
--data '    {
        "items": [
            {
                "productId" : "648a4b53e282dca658f180c4",
                 "quantity" : 10
            },
            {
               "productId" : "648a4babe282dca658f180cf",
                 "quantity" : 10


            }
        ]
    }'
```

### Remove Cart

| Path         		        | /api/v1/carts/{cartId}            |
|---------------------------|-----------------------------------|
| HTTP Method 				| DELETE                            |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |

example:
```
curl --location --request DELETE 'http://localhost:8000/api/v1/carts/648bb2a0a5f0eef64bffe379'
```

## Orders

### List of Orders
| Path         		        | /api/v1/orders                    |
|---------------------------|-----------------------------------|
| HTTP Method 				| GET                               |
| Response Format      		| json                              |
| Requires Authentication 	| true                              |
| scope                  	| admin                             |

Returns list of orders

examples:
* Request
```
curl --location 'http://localhost:8000/api/v1/orders'
```
you can add different query params in order to filter the list of orders like:

* Request using Pagination
```
curl --location 'http://localhost:8000/api/v1/orders?limit=10&page=1'
```

#### Create Order
| Path         		        | /api/v1/orders                    |
|---------------------------|-----------------------------------|
| HTTP Method 				| POST                              |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |
| scope                  	| guest/admin                       |

example:
```
curl --location 'http://localhost:8000/api/v1/orders' \
--header 'Content-Type: application/json' \
--data '    {
        "cartId": "648a4b7ee282dca658f180ca",
        "address": "cra 56sur 30"
    }'
```

Returns Order Id

### Retrieve Order by Id

| Path         		        | /api/v1/orders/{orderId}          |
|---------------------------|-----------------------------------|
| HTTP Method 				| GET                               |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |
| scope                  	| guest/admin                       |

example
```
curl --location 'http://localhost:8000/api/v1/orders/648a4b7ee282dca658f180ca'
``` 

### Remove Order

| Path         		        | /api/v1/orders/{orderId}          |
|---------------------------|-----------------------------------|
| HTTP Method 				| DELETE                            |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |
| scope                  	| admin                             |

example:
```
curl --location --request DELETE 'http://localhost:8000/api/v1/orders/648a4beae282dca658f180da' \
--header 'Content-Type: application/json'
```

## Orders

### Make Payment

| Path         		        | /api/v1/payment                   |
|---------------------------|-----------------------------------|
| HTTP Method 				| POST                              |
| Response Format      		| json                              |
| Requires Authentication 	| false                             |
| scope                  	| guest/admin                       |

example:
```
curl --location 'http://localhost:8000/api/v1/payment' \
--header 'Content-Type: application/json' \
--data '    {
        "orderId": "648bb9ffeae950ca36b4bc60",
        "cardId": "648a4beae282dca658f180da",
        "description" : "payment order"
    }'
```
