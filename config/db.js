const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", // Replace with your database host
  user: "root", // Replace with your MySQL username
  password: "root", // Replace with your MySQL password
  database: "mycvproject", // Replace with your MySQL database name
});

exports.db = () => {
  connection.connect((error) => {
    if (error) {
      console.error("Error connecting to the database:", error);
    } else {
      console.log("Connected to mySQL database.");
    }
  });
};

exports.connection = connection;
