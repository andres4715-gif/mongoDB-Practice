# __*GRAPHQL SERVER SETUP:*__ 

# __*Run The MongoDB Service:*__ 

## Run, stop and restart the MongoDB service: 
```shell
brew services start mongodb-community
```
If everything is ok you should see something like this: 

```shell
➜  graphQL_Mongo brew services start mongodb-community
==> Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-community)
```

## Other commands to interact with MongoDB server: 

```shell
brew services stop mongodb-community
brew services restart mongodb-community
```

- If you need to check if the MongoDB is running, you can check this link in any browser: 
```text
http://localhost:27017/
```

## Open the MongoDB COMPASS using a link in the browser:
```shell
$ mongodb://localhost:27017/mi-base-de-datos
```

👌

## Run the GraphQL Server. 
- You can use the command line: 
```shell
$ node server.js  
```
- Another option to run the server is: (According to the package.json)

```shell
$ npm run server
```
## URL to run the GraphQL Server: 

```text
http://localhost:4000/graphql
```

🔥😊
