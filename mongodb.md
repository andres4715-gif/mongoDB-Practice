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
```javascript
<database_name>.<collection_name>.find
example: 
db.users.find()
```
With find(): Shows the list of documents on specific collection. 

- The output is:
```javascript
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
## Command to create a new collection: .insert
```javascript
$ <database_name> <collection_name> 
example: 
db.users.insert(<object name>)
```
## Command to add an object to collection. 
```shell
$ db.users.insert(user1)
```

## Version 2: 

## Command to add just one document: insertOne()

```shell
$ insertOne()
```
Example: 

Adding a document: 

```json
user3 = {
    "username": "Daniel",
    "age": 35,
    "email": "daniel@gmail.com"
}
```

```shell
db.users.insertOne(user3)
```
- Output

```shell
codigofacililto> db.users.insertOne(user3)
{
  acknowledged: true,
  insertedId: ObjectId('6596ca96b8ed56d0913a89e6')
}
```

## Version 3: 

## Command to add just one document: insertMany([data1, data2, data3])

Example: 

- documents: 

```javascript
user4 = {
    "username": "Ines",
    "age": 65,
    "email": "ines@gmail.com"
}

user5 = {
    "username": "Rosalba",
    "age": 65,
    "email": "rosalba@gmail.com"
}

user6 = {
    "username": "Paula",
    "age": 35,
    "email": "paula@gmail.com"
}
```

- Command line: 

```shell
$ db.users.insertMany([user4, user5, user6])
```
- Output
```javascript
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6596cc63b8ed56d0913a89e7'),
    '1': ObjectId('6596cc63b8ed56d0913a89e8'),
    '2': ObjectId('6596cc63b8ed56d0913a89e9')
  }
}
```

