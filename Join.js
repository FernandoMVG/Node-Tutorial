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
  
  // Create the agents table
  const createAgentsTable = "CREATE TABLE IF NOT EXISTS agents (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(createAgentsTable, function (err, result) {
    if (err) throw err;
    console.log("Agents table created or already exists");

    // Populate agents
    const agentsData = [
      { name: 'Agent1', address: '789 Oak Street' },
      { name: 'Agent2', address: '10 Pine Street' },
      { name: 'Agent3', address: 'Olaya' },
      { name: 'Agent4', address: '25 Walnut Street' },
      { name: 'Agent5', address: '30 Spruce Street' },
      { name: 'Agent6', address: '35 Pineapple Street' },
      { name: 'Agent7', address: '40 Banana Street' }
    ];

    const insertAgentsQuery = "INSERT INTO agents (name, address) VALUES ?";
    con.query(insertAgentsQuery, [agentsData.map(agent => [agent.name, agent.address])], function(err, result) {
      if (err) throw err;
      console.log("Agents inserted successfully");

      // Join the customers and agents tables
      const sql = "SELECT customers.name AS customer_name, customers.address AS customer_address, agents.name AS agent_name, agents.address AS agent_address FROM customers JOIN agents ON customers.address = agents.address";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Joined tables:");
        console.log(result);
        
        // Close the connection
        con.end(function(err) {
          if (err) throw err;
          console.log("Connection closed");
        });
      });
    });
  });
});

