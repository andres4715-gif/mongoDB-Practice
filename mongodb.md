# **Mongodb commands:** 

## Command to Show active database on the system: 
```shell
$ show databases or show db
``` 
## Command to know in with database we are working
```shell
$ db 
```
## Command to create or use a database
```shell
$ use <database name>
```
## Command to show the collections. 
```shell
$ show collections 
```
## Command to show data within any collection. 
```shell
<database_name>.<collection_name>.find
example: 
db.users.find()
```
With find(): Shows the list of documents on specific collection. 

- The output is:
```json
codigofacililto> db.users.find()
[
  {
    _id: ObjectId('659602fab8ed56d0913a89e4'),
    username: 'Andres',
    age: 42,
    email: 'andres@gmail.com'
  },
  {
    _id: ObjectId('6596b09cb8ed56d0913a89e5'),
    username: 'Liliana',
    age: 47,
    email: 'limarios@gmail.com'
  }
]
```

# How to create data in Mongodb

## Version 1: 

## Command to create a new object. 
```shell
user1 = {
    "username": "Andres",
    "age": 42,
    "email": "andres@gmail.com"
}
```
## Command to create a new collection. 
```shell
$ <database_name> <collection_name> 
example: 
db.users.insert(<object name>)
```
## Command to add an object to collection. 
```shell
$ db.users.insert(user1)
```

## Version 2: 

