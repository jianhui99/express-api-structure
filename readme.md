## project structure with Express and Node.Js

### Folders in the project
1. Controllers
   - This folder would contain all the functions for your APIs. Naming of files - xxxxx.controllers.js
2. Routes
   - This folder would contain all the routes that you have created using Express Router and what they do would be exported from a Controller file. Naming of files - xxxxx.routes.js
3. Models
   - This folder would contain all your schema files and and the functions required for the schema would also lie over here. Naming of files - xxxxx.js
3. Middleware
   - This folder would contain all the middleware that you have created, whether it be authentication/some other function. Naming of files - xxxxx.middleware.js
4. Utils(Optional)
   - The common functions that you would require multiple times throughout your code. Naming of files - Normal project file naming scheme
5. Templates(Optional)
   - If your code requires you to send certain emails/ HTML code to the client-side, store it in this files. Naming of files - Normal project file naming scheme
6. Config(Optional)
   - Configuration files for third party APIs/services like passport/S3,etc. Naming of files- Normal project file naming scheme

### Files in the root of project
1. server.js
   - This file would basically be the entry point of the Express application and should be as minimal as possible
2. package.json
   - file which contains all the project npm details, scripts and dependencies.
3. .gitignore
   - The files you don’t want to push to git

### NPM packages
1. express 
   - Express is a minimal and flexible Node.Js web application framework that provides a robust set of features for web and mobile applications.
2. mysql2
   - mysql2 is an npm package that gives us a MySQL client for communicating with MySQL using Node.
3. cors
   - This package provides a Connect/Express middleware that can be used to enable CORS with various options.
4. jsonwebtoken
   - Json web token
5. bcryptjs
   - A library to help you hash passwords.
5. dotenv 
   - For store the global value in .env file
7. sequelize 
   - Sequelize is a promise-based object-relational mapper (ORM) library. Essentially, Sequelize allows us to write SQL queries with JavaScript.
8. nodemon
   - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
9. joi
   - Request validation

