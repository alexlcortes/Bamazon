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
    console.log("The things I have for sale...");

});

con.query('SELECT * FROM Products', function(err, res) {
	for (var i=0; i < res.length; i++) {

		console.log('-------------------------------------------' + '\n' + 'Product: ' + res[i].ProductName + '\n' + 'Price: $' + res[i].Price 
			+ '\n' + 'Item number: ' + res[i].ItemID + '\n' + '-------------------------------------------');
	}

	stockUpdate();
})

var stockUpdate = function() {
	inquirer.prompt([{
		type: "input",
		name: "item",
		message: "Please type the Item number of the Product you would like to buy.",
	},]).then (function(choice) {
			var item = { ItemID: item.choice }
			console.log("You have chosen: " + item);
		});

};


