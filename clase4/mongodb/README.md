# Mongo Shell Lab


## Commands

### Show databases
<img src="/lab/img/GET_PRODUCT_FLOW.png"/>
The command returns the list of databases
```
show dbs
```
<img src="/clase4/mongodb/assets/show_database.PNG"/>

### Select specific database
<img src="/lab/img/CREATE_PRODUCT_FLOW.png"/>
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


### Modify product
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


### Delete product
<img src="/lab/img/DELETE_PRODUCT_FLOW.png"/>
The endpoint remove an specific product
```
curl --location --request DELETE 'http://localhost:8000/api/v1/products/192660bf-5e99-49da-ac0e-5e68c4ca22c6'
```
<img src="/lab/img/DELETE_PRODUCT.png"/>
