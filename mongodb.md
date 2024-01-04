Para mostrar las bases de datos que estan activas en el sistema
show databases or show db

Para saber en que bsse de datos estamos trabajando
db 

Para crear una base de datos nueva o usar una que se quiera
use codigofacililto

Para mostrar las collections que existen en la base de datos
show collections 

Para crear una nueva Collection
<nombre de la base de datos> <nombre de la colection> 

Por ejemplo: 

db.users.insert(<el objeto que se quiere persistir>)

Para crear un objeto con el siguiente ejemplo: 

user1 = {
    "username": "Andres",
    "age": 42,
    "email": "andres@gmail.com"
}

Para agregar el objeto a la collection seria de la siguiente forma 

db.users.insert(user1)
