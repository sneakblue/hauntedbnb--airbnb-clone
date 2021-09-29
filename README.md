### **Installing node modules**
------------------------------------------------

> install backend

- navigate to the backend folder and run:
    `npm install`

> install frontend

- navigate to the frontend folder and run:
    `npm install`
------------------------------------------------
### **Setting up the database**
------------------------------------------------

> Create a user

- Create a user of your choosing in your psql database:
    `CREATE USER <user> WITH PASSWORD '<password>' CREATEDB;`

> Create your .env file

- Create a .env file in the backend folder

- copy contents of *.env-example* into your *.env* file

- replace DB_USERNAME with the created username

- replace other values with any desired name / value

> Create the database

- run sequelize using:
    `npx dotenv sequelize db:create`

- run migrate tables using:
    `npx dotenv sequelize db:migrate`

- seed tables using:
    `npx dotenv sequelize db:seed:all`

-----------------------------------------------
### **Starting the Application**
-----------------------------------------------

> Start the backend

- navigate to the backend folder

- run start the express server using:
    `npm start`

> Start the frontend

- Open a new terminal

- navigate to the frontend folder:

- run npm start using:
    `npm start`

``` Javascript
    const newfunc = () => {
        return 'Test Function'
    }

```
