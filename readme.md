### MONGODB CRUD OPERATIONS EXAMPLE

### important commands

`npm install express`
`set "type":"module" in package.json file`
`git init`
`git add .`
`create repository with the name same as in package.json file`
`git commit -m "your message`
`git remote add origin https://github.com/Neelamegan932/mongodb.git`
`git branch -M main`
`git push -u origin main`

### Database types

`SQL - MySQL, PostGres, MariaDB`
`NoSQL- MongoDB, `

### MongoDB connection method

`Open mongodb atlas in browser`
`choose try free tier, then select nearby region as Mumbai`
`In atlas page, create new project, dataset and cluster`
`Connection page will open, then copy the connection string`
`Use the connection string in VS code to connect with the MongoDB Atlas database`

## Hiding sensitive information

`create .env file and save the the connection string in a variable`
`hide this .env file using the .env in .gitignore file`
`use process.env.<your variable name> in connection string field instead of using original connection string`
`install the package dotenv using npm install dotenv command`
`import the dotenv package using import dotenv from dotenv`
`configure the dotenv package using dotenv.config()`
`create copy of .env file using ctrl+C and ctrl+V in files column`
`remove the connection string and keep only the variable name in .env copy file`
