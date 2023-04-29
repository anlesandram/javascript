# Mongo Shell Lab


## Commands

### Show databases
```
show dbs
```
<img src="/clase4/mongodb/assets/show_databses.png"/>


### Use database
```
use name_database
```
<img src="/clase4/mongodb/assets/use_database.png"/>


### Show collection
```
show collections
```
<img src="/clase4/mongodb/assets/show_collections.png"/>


### Show all elements in collection
```
db.product.find()
```
<img src="/clase4/mongodb/assets/find_all_items_collection.png"/>


### Insert one element in the collection
```
db.product.insertOne({name:"dashboard",description:"dashboard black",price:10000,category:"office",quantity:10})
```
<img src="/clase4/mongodb/assets/insert_one_element.png"/>


### Update element in the collection
```
 db.product.update({_id: ObjectId("644c83134dbe1435966c12ab")},{$set : {description: "shoes"}})
```
<img src="/clase4/mongodb/assets/update_element.png"/>


### Delete one element in the collection
```
 db.product.deleteOne({_id: ObjectId("644c888f4dbe1435966c12ad")})
```
<img src="/clase4/mongodb/assets/delete_one_element.png"/>
