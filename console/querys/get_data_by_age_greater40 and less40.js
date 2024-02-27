// data

codigofacililto > db.users.find()
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


// get the data with age > 40
// This returns a document. 

db.users.find({
  age: {
    $gt: 40
  }
});

// output: 

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

// get the data with age < 40


db.users.find({
  age: {
    $lt: 40
  }
});

// output

[
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