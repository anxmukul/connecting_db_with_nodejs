var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "amelia053",
    database: "mukul"
});
var myFunction = function(err, data){
    if(err){
        console.log("Error in rendering");
    }
    else{
        console.log("Type of: ", JSON.stringify(data[2]));
    }
}
con.connect(function(err){
    if(err){
        console.log("Error occured in connection", err);
    }
    else{
        console.log("Connected");
        var sql = "select * from prime_number"; 
        con.query(sql, myFunction);
    }
});