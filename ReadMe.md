## created clients folder
- Added components -> Header.jsx, ToDoForm.jsx
- In the to do form, we have added a text field.
- created a useState which will store and update text as we type in the text form.
- onSubmit={<f1>} : this function will  call the f1 specified and do the action accordingly. 
- onChange={<onInputChange>} : onChange function will call the onInputChange function that i have created. In the onInputChange function i have used the setText from the useState to change the text value as i type in the form.  

## created Server folder
- changing the terminal directory to server.js
- create a new file index.js
- in the terminal, type the command -> npm init
- input the package.json structure
- package.json file will be created.

    ### installing express
    - npm i express

## Index.js
- import express -> import express from 'express';
- initialized express as : const app = express();

- app.listen() : we can create a server by using listen function.
- listen function takes 2 arguments: first, the port on which the server will run. Second, an action you want to perform when the server runs, ex: printing "your server is successfully running on port 8000"                                        

- go to package.json and under scripts, add a script: "start":"node index.js"
- this will run index.js when we type npm start in terminal

## nodemon
- in server folder, install nodemon: npm i nodemon
- in package.json, replace the script : "start":"node index.js" with "start":"nodemon index.js"

## connecting Database
- inside server, install mongoose: npm i mongoose;
- mongoose is used to connect the mongodb database to the server.
- import mongoose.
- to connect to the database, it uses **connect** function.
- connect function takes two arguments: first is the mongodb url, which you have to copy from the mongodb cluster itself. and second is `{ useNewUrlParser: true }`, which means the previous url has been depricated, so use the new url.
- mongoose.connection.on() function will is used to do an action, if the server is connected / disconnected to the database. here, if connected, it will print 'database connected 'message in the console, otherwise 'database disconnected'.

- go to index.js, import connection from db.js
- and use `connection()` function before app.listen.
