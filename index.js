console.log('Lets Start');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "amelia053"
});
con.connect(function(err){
    if(err){
        console.log("Error occured in connection");
    }
    else{
        console.log("Connected");
    }
});