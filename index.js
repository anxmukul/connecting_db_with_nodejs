console.log('Lets Start');
var mysql = require('mysql');
var sql = "select Director from University where Department = 'Computer Science and Engineering'";
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "amelia053",
    database: "mukul"
});
con.connect(function(err){
    if(err){
        console.log("Error occured in connection", err);
    }
    else{
        console.log("Connected!");
        con.query(sql, function(err, data){
            if(err){
                console.log("Error in querying", err);
            }
            else{
                console.log("Data = " + JSON.stringify(data));
            }
        });
    }
});