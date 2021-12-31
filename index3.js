const {Client} = require('pg');

var client = new Client({
    user: process.env.user, // Yaha aur karke heroku pg database ka credentials diya gya tha.
    host: process.env.host ,
    database: process.env.database ,
    password: process.env.password,
    port:  5432 ,
    ssl: {
        rejectUnauthorized: false
    }
})

    client.connect((err) => {
        if(err){
           throw err;
        }
        else{
            var createTable = `create table accounts(user_id serial PRIMARY KEY, email varchar(60) unique not null , password varchar(60) not null)`;
            client.query(createTable, (err, result) => {
                if(err){
                    console.log(err)
                }
                else{
                    console.log(result);
                }
            })
        }
})