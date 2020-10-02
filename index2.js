console.log("IN another file");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "amelia053",
    database: "mukul"
});
var myFunction = function(err, data){
    if(err){
        console.log("Error in creating table", err);
    }
    else{
        console.log("Inserted in Table: ", data);
    }
}
var prime = function(j){
    var primeTrue = true;
    for (var i = 2; i <= Math.sqrt(j); i++) {
        if (j % i === 0) {
            primeTrue = false;
        }
    }
    return primeTrue;
}
con.connect(function(err){
    if(err){
        console.log("Error occured in connection", err);
    }
    else{
        console.log("Connected");
        for(var n = 1; n<= 100; n++){
            if(prime(n)){
                //string interpolation
                var sql = `insert into prime_number values (${n}, 'YES')`
            }
            else{
                var sql = `insert into prime_number values (${n}, 'NO')`;
            }
            con.query(sql, myFunction);
            
        }
        //con.query(sql, myFunction);    
    }
})