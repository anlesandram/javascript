# Mongo Shell Lab


## Commands

### Show databases
```
show dbs
```
<img src="/clase4/mongodb/assets/show_database.PNG"/>

### Use databases
```
use name_database
```
<img src="/clase4/mongodb/assets/use_database.PNG"/>


### Show all elements in collection
```
db.product.find()
```
<img src="/clase4/mongodb/assets/find_all_items_collection.PNG"/>


### Insert one element in the collection
```
db.product.insertOne({name:"dashboard",description:"dashboard black",price:10000,category:"office",quantity:10})
```
<img src="/clase4/mongodb/assets/insert_one_element.PNG"/>


### Update element in the collection
```
 db.product.update({_id: ObjectId("644c83134dbe1435966c12ab")},{$set : {description: "shoes"}})
```
<img src="/clase4/mongodb/assets/update_element.PNG"/>


### Delete one element in the collection
```
 db.product.update({_id: ObjectId("644c83134dbe1435966c12ab")},{$set : {description: "shoes"}})
```
<img src="/clase4/mongodb/assets/delete_one_element.PNG"/>