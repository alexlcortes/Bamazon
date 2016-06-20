var mysql = require("mysql");
var inquirer = require('inquirer');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root",
    database: "Bamazon_DB"

});

con.connect(function(err) {
    if (err) {
        console.log('Error connecting to Database');
        return;
    }
    console.log("-------------------------------------------");
    console.log('Connection established to Bamazon Database.');
    console.log("-------------------------------------------");
    console.log("The things I have for sale..." + "\n");

});

con.query('SELECT * FROM Products', function(err, res) {
	for (var i=0; i < res.length; i++) {

		console.log('Department: ' + res[i].DepartmentName + '\n' + 'Product: ' + res[i].ProductName + '\n' + 'Price: $' + res[i].Price + '\n');
	}
	console.log("-------------------------------------------");
});