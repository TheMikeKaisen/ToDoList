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
