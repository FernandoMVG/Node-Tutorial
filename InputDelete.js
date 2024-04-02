var mysql = require('mysql2');
var readline = require('readline');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "geoguessrplayer_123",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;

  // Create interface for reading input from console
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt user for the name to delete
  rl.question("Enter the name of the customer you want to delete: ", function(name) {
    var sql = "DELETE FROM customers WHERE name = ?";
    con.query(sql, [name], function (err, result) {
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

        // Close the readline interface
        rl.close();
      });
    });
  });
});
