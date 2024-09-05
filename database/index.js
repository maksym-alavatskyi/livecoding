const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./test_db.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Suboptimal query to be optimized by the candidate
const suboptimalQuery = `SELECT u.id, u.username, o.id, o.totalAmount FROM users u LEFT JOIN orders o ON u.id = o.userId;`;

// Execute the suboptimal query
db.all(suboptimalQuery, [], (err, rows) => {
  if (err) {
    console.error('Error executing query:', err.message);
  } else {
    console.log('Result of the suboptimal query:');
    console.table(rows);
  }
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error('Error closing the database connection:', err.message);
  } else {
    console.log('Database connection closed.');
  }
});
