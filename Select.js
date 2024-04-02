var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "geoguessrplayer_123",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers WHERE name = 'Alice'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Values for customers with name John:");
    console.log(result);

    // Close the connection
    con.end();
  });
});
