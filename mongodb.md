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

## Command to delete any database
- After use the database if you want to remove this DB you would need to use this command line: 
- Take in mind, if you remove this data base you would remove also the collections and documents.  
```shell
$ db.dropDatabase() 
```

## Command to create new collections. 
```shell
$ db.createCollection("<collection name>")

Example: 
$ db.createCollection("users")
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

# Obtain certain data from dataBase: 

Take in mind I have this data: 

```json
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
  },
  {
    _id: ObjectId('6596ca96b8ed56d0913a89e6'),
    username: 'Daniel',
    age: 35,
    email: 'daniel@gmail.com'
  },
  {
    _id: ObjectId('6596cc63b8ed56d0913a89e7'),
    username: 'Ines',
    age: 65,
    email: 'ines@gmail.com'
  },
  {
    _id: ObjectId('6596cc63b8ed56d0913a89e8'),
    username: 'Rosalba',
    age: 65,
    email: 'rosalba@gmail.com'
  },
  {
    _id: ObjectId('6596cc63b8ed56d0913a89e9'),
    username: 'Paula',
    age: 35,
    email: 'paula@gmail.com'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ea'),
    username: 'Carmen',
    age: 7,
    email: 'carmen@gmail.com',
    status: 'inactive'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89eb'),
    username: 'Stella',
    age: 48,
    email: 'stella@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ed'),
    username: 'Juan',
    age: 78,
    email: 'juan@gmail.com',
    status: 'active'
  }
]
```
## Practice 1: 

- I want to get data with username Osman: 

## Version 1: 

```shell
db.users.find({username: "Osman"}); 
```

The output is: 

```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  }
]
```
## Version 2:

```shell
db.users.findOne({username: "Osman"}); 
```

In this case we gonna get just one element: 

```json
{
  _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
  username: 'Osman',
  age: 98,
  email: 'Osman@gmail.com',
  status: 'active'
}
```
## Version 3: 
If we want to get data with more than one argument we should use this command line: 

```shell
 db.users.findOne({username: "Osman", age: 98}); 
```
The output is: 

```json
{
  _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
  username: 'Osman',
  age: 98,
  email: 'Osman@gmail.com',
  status: 'active'
}
```

If you send the wrong arguments the output would be: 

```shell
$ codigofacililto> db.users.findOne({username: "Osman", age: 97}); 
null
```
___

## Practice 2: 
- Obtain data with age greater than 50: 
- We need to user this operator (>)

```shell
$ db.users.find({age: { $gt: 70}}); 
```

The output is: 

```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ed'),
    username: 'Juan',
    age: 78,
    email: 'juan@gmail.com',
    status: 'active'
  }
]

```

> **NOTE:** The relational operator are: 
> 1. gt = Greater >
> 2. gte = Greater than or equal >=
> 3. lt = less <
> 4. lte = less than or equal <=
> 4. ne = not equals !=


## Another example: 

```shell
$ db.users.find({ age: { $lt: 10}}); 
```
The output is: 

```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ea'),
    username: 'Carmen',
    age: 7,
    email: 'carmen@gmail.com',
    status: 'inactive'
  }
]
```
## Practice 3: 
- Obtain the amount of data with age < 70
- We need to use the count() method: 

```shell
$ db.users.find({ age: {$lt: 70}}).count();
```

- The output is: 

```text
db.users.find({ age: {$lt: 10}}).count();
8
```

## Practice 4: 
- Obtain list of users with age > 50 and Active status: 

```shell
$ db.users.find({ 
    $and: [
       { age: { $gt: 50}}, 
       { status: 'active'}
    ]
}); 
```

- The output is: 

```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ed'),
    username: 'Juan',
    age: 78,
    email: 'juan@gmail.com',
    status: 'active'
  }
]
```

## Practice 5: 
- Obtain list of users with age different at 78
```shell
$ db.users.find({ age: { $ne: 78}}); 
```

- The output is: 

```json
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
  },
  {
    _id: ObjectId('6596ca96b8ed56d0913a89e6'),
    username: 'Daniel',
    age: 35,
    email: 'daniel@gmail.com'
  },
  {
    _id: ObjectId('6596cc63b8ed56d0913a89e7'),
    username: 'Ines',
    age: 65,
    email: 'ines@gmail.com'
  },
  {
    _id: ObjectId('6596cc63b8ed56d0913a89e8'),
    username: 'Rosalba',
    age: 65,
    email: 'rosalba@gmail.com'
  },
  {
    _id: ObjectId('6596cc63b8ed56d0913a89e9'),
    username: 'Paula',
    age: 35,
    email: 'paula@gmail.com'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ea'),
    username: 'Carmen',
    age: 7,
    email: 'carmen@gmail.com',
    status: 'inactive'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89eb'),
    username: 'Stella',
    age: 48,
    email: 'stella@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  }
]
```

## Practice 6: 
- Obtain list of users with age 98 or 48 or 7

### Version 1: 
```shell
$ db.users.find({ 
    $or: [
       { age: 98}, 
       { age: 48}, 
       { age: 7}
    ]
}); 
```

- The output is: 

```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ea'),
    username: 'Carmen',
    age: 7,
    email: 'carmen@gmail.com',
    status: 'inactive'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89eb'),
    username: 'Stella',
    age: 48,
    email: 'stella@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  }
]
```

### Version 2: 
- We can use:  $in

- Example: 

```shell
$ db.users.find({
  age: { $in: [98, 48, 7]}
}); 
```

- Whit this way we are getting the same result but in this case we are using: $in

- The output is: 

```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ea'),
    username: 'Carmen',
    age: 7,
    email: 'carmen@gmail.com',
    status: 'inactive'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89eb'),
    username: 'Stella',
    age: 48,
    email: 'stella@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  }
]
```

## Practice 7: 
- Obtain list of users with STATUS

```shell
$ db.users.find({ 
    status: { $exists: true }
  });
```

- The output is: 

```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ea'),
    username: 'Carmen',
    age: 7,
    email: 'carmen@gmail.com',
    status: 'inactive'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89eb'),
    username: 'Stella',
    age: 48,
    email: 'stella@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ed'),
    username: 'Juan',
    age: 78,
    email: 'juan@gmail.com',
    status: 'active'
  }
]
```

## Practice 8: 
- Obtain list of users with STATUS = active

## Version 1: 
```shell
$ db.users.find({ 
    status: "active"
  });
```

- The output is: 

```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89eb'),
    username: 'Stella',
    age: 48,
    email: 'stella@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ed'),
    username: 'Juan',
    age: 78,
    email: 'juan@gmail.com',
    status: 'active'
  }
]

```

## Version 2:
```shell
$ db.users.find({ 
    $and: [
      { status: {$exists: true}}, 
      { status: "active"}
    ]
  });
```

- We got the same output: 

```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89eb'),
    username: 'Stella',
    age: 48,
    email: 'stella@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ec'),
    username: 'Osman',
    age: 98,
    email: 'Osman@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ed'),
    username: 'Juan',
    age: 78,
    email: 'juan@gmail.com',
    status: 'active'
  }
]

```