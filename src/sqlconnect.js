import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',      // Database host
    user: 'vedaant',  // Your database username
    password: 'retail',  // Your database password
    database: 'university' // Your database name
  });
connection.connect(err => 
{
    if (err) 
    {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
});
connection.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
  
    const query = 'SELECT * FROM course';
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing the query:', err);
        return;
      }
      
      console.log('Query results:', results);
  
      // Close the connection
      connection.end(err => {
        if (err) {
          console.error('Error closing the connection:', err);
          return;
        }
        console.log('Connection to the database closed.');
      });
    });
  });