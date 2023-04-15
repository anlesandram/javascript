# Steady Ready Go !!

## Run Application

```
npm run server.js
```

## Description
The application is used to manage different products.

### Endpoints 

#### Return List of Products
The endpoint returns the list of available products
```
curl --location 'http://localhost:8000/api/v1/products/'
```
<img src="/lab/img/GET_PRODUCT.png"/>

#### Add new product
The endpoint create a new product
```
curl --location 'http://localhost:8000/api/v1/products' \
--header 'Content-Type: application/json' \
--data '    {
        "name": "camiseta",
        "description": "test",
        "price": 10000,
        "category":"test",
        "quantity":"test"
    }'
```
<img src="/lab/img/CREATE_PRODUCT.png"/>


#### Modify product
The endpoint modify an specific product
```
curl --location --request PATCH 'http://localhost:8000/api/v1/products/192660bf-5e99-49da-ac0e-5e68c4ca22c6' \
--header 'Content-Type: application/json' \
--data '    {
        "name": "buzo",
        "description": "test",
        "price": 2000,
        "category":"test",
        "quantity":"test"
    }'
```
<img src="/lab/img/MODIFY_PRODUCT.png"/>


#### Delete product
The endpoint remove an specific product
```
curl --location --request DELETE 'http://localhost:8000/api/v1/products/192660bf-5e99-49da-ac0e-5e68c4ca22c6'
```
<img src="/lab/img/DELETE_PRODUCT.png"/>
