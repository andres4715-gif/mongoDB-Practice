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
$ <database name> <collection name> 
example: 
db.users.insert(<object name>)
```

## Command to add an object to collection. 
```shell
$ db.users.insert(user1)
```