var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "geoguessrplayer_123",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = '20 Birch Street' OR name ='Alice'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);

    // Select values from the customers table
    var selectSql = "SELECT * FROM customers";
    con.query(selectSql, function (err, rows) {
      if (err) throw err;

      // Output the retrieved values
      console.log("Values in the customers table:");
      console.log(rows);

      // Close the connection
      con.end();
    });
  });
});