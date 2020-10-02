//x = []
const input = require('./input.json')
console.log(input);
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
        console.log(" Database Connected!");
    }
});
var myFunction = function(err, data){
    if(err){
        console.log("Error Occured in inserting in DB!", err);
    }
    else{
        console.log("Insertion Completed!", data);
    }
}
var count = input.length;
for(var j = 0; j< count; j++){
    var o = input[j];
    var m = o.messsage;
    var k = o.username;
    var sql = `insert into base values ('${k}', '${m}')`;
    con.query(sql, myFunction);
}

