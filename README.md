# Welcome to FLights Service

 ## Project Setup
 - clone the project on your local
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a '.env' file in the root directory and add the following environment variable
    - `PORT=3004`
- Inside the `src/config` folder create a new file  `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password":<YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql" 
  }
  
}
```
- Once you've added your db config as listed above,go to the src folder from your terminal and execute the following command `npx sequelize db:create`
       
## DB Design
  - notificationTicket Table
  - A notification belong to a RecepientEmail 

## Tables
### notificationtickets
  

npx sequelize model:generate --name notificationtickets --attributes
subject:String,content:String,recepientEmail:String,status:Enum,notificationTime:String,createdAt:DateTime,updatedAt:DateTime 