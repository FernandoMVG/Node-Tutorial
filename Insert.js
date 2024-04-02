var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "geoguessrplayer_123",
  database: "mydb"
});

// Connect to the database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // Insert values into the customers table
  var sql = "INSERT INTO customers VALUES ?";
  var values = [
    ['1', 'Alice', '123 Maple Street'],
    ['2', 'Bob', '456 Elm Street'],
    ['3', 'Charlie', '789 Oak Street'],
    ['4', 'David', '10 Pine Street'],
    ['5', 'Emma', '15 Cedar Street'],
    ['6', 'Frank', '20 Birch Street'],
    ['7', 'Grace', '25 Walnut Street'],
    ['8', 'Henry', '30 Spruce Street'],
    ['9', 'Isabel', '35 Pineapple Street'],
    ['10', 'Jack', '40 Banana Street']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    
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
