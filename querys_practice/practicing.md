# Practice:

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

## Practice 9: 
- Obtain list of users with STATUS = active and Email exist: 

```shell
$ db.users.find({
  $and: [
    { status: "active" }, 
    { email: {$exists: true }}
  ]
})
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

## Practice 10: sort();
- Obtain DSC (descending) age list : 

```shell
$ db.users.find().sort({
  age: -1
})
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
    _id: ObjectId('6596e0a3b8ed56d0913a89eb'),
    username: 'Stella',
    age: 48,
    email: 'stella@gmail.com',
    status: 'active'
  },
  {
    _id: ObjectId('6596b09cb8ed56d0913a89e5'),
    username: 'Liliana',
    age: 47,
    email: 'limarios@gmail.com'
  },
  {
    _id: ObjectId('659602fab8ed56d0913a89e4'),
    username: 'Andres',
    age: 42,
    email: 'andres@gmail.com'
  },
  {
    _id: ObjectId('6596ca96b8ed56d0913a89e6'),
    username: 'Daniel',
    age: 35,
    email: 'daniel@gmail.com'
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
  }
]
```

## Practice 11: limit();
- Obtain get the older user: 

```shell
$ db.users.find().sort({
  age: -1
}).limit(1)
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
  }
]
```

## Practice 12: (ASC);
      * limit();
      * ASC
- Obtain get the youngest user: 

```shell
$ db.users.find().sort({
  age: 1
}).limit(1)
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
  }
]
```


## Practice 13: (Regular expressions)
- Obtain a list of user with email starting with juan: 

```shell
$ db.users.find( {
  email: /^juan/
})
```

- The output is: 
```json
[
  {
    _id: ObjectId('6596e0a3b8ed56d0913a89ed'),
    username: 'Juan',
    age: 78,
    email: 'juan@gmail.com',
    status: 'active'
  }
]
```

## Practice 14: (Regular expressions)
- Obtain a list of user with username ending with en: 

```shell
$ db.users.find( {
  username: /en$/
})
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
  }
]
```

## Practice 15: (Regular expressions)
- Obtain a list of user with username contains Lili: 

```shell
$ db.users.find( {
  username: /Lili/
})
```

- The output is: 
```json
[
  {
    _id: ObjectId('6596b09cb8ed56d0913a89e5'),
    username: 'Liliana',
    age: 47,
    email: 'limarios@gmail.com'
  }
]
```