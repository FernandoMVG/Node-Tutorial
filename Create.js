var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "geoguessrplayer_123"
});

// Connect to the database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  // Create the database
  con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created or already exists");
    
    con.query("USE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database selected");
    // Create the table
    const sql = "CREATE TABLE IF NOT EXISTS customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created or already exists");

      con.end();
      });
    });
  });
});
