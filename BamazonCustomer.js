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

		var currentStock = [];
		currentStock.push("" + result[i].StockQuantity);

		console.log('-------------------------------------------' + '\n' + 'Product: ' + res[i].ProductName + '\n' + 'Price: $' + res[i].Price 
			+ '\n' + 'Item number: ' + res[i].ItemID + '\n' + '-------------------------------------------');
		}

		console.log("Current Stock: " + currentStock);
	}

	inquirer.prompt([{
		type: "input",
		name: "Item",
		message: "Please type the Item number of the Product you would like to buy.",
	},{
		type: "input",
		name: "Amount",
		message: "How many would you like?",
	},
		]).then (function(choice) {
			var itemChosen = choice.Item;
			var amountChosen = choice.Amount;

			var newStock = currentStock - amountChosen;
			console.log('New Stock: ' + newStock);
	});
});


