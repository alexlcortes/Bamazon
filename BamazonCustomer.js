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
    console.log("-------------------------------------------");

});

var userChoice = [];
var choiceStock = [];
var choicePrice = [];

con.query('SELECT * FROM Products', function(err, res) {
	for (var i=0; i < res.length; i++) {

		console.log('Product: ' + res[i].ProductName + '\n' + 'Price: $' + res[i].Price 
			+ '\n' + 'Item number: ' + res[i].ItemID + '\n' + '-------------------------------------------');

		userChoice.push("" + res[i].ItemID);
		choiceStock.push("" + res[i].StockQuantity);
		choicePrice.push("" + res[i.Price]);
	}

	buyerChoice(userChoice, choiceStock, choicePrice);
})

var buyerChoice = function(choice, stock, price) {
	inquirer.prompt([{
		type: "input",
		name: "item",
		message: "Please type the Item number of the Product you would like to buy.",

	}, {
		type: "input",
		name: "amount",
		message: "How many would you like to purchase?"

	},]).then (function(stuff) {

		var itemChosen = stuff.item - 1;
		var totalAmount = stuff.amount * price[itemChosen];

		// price[itemChosen] comes out as undefine
		// console.log("test: " + price[itemChosen]);

		console.log("Item ID Chosen: " + choice[itemChosen]);
		console.log("Available: " + stock[itemChosen]);
		console.log("Wanted: " + stuff.amount);
		console.log("-------------------------------------------" + '\n');

		

		stuff.amount = stock[itemChosen] - stuff.amount;

		// console.log("stuff.amount: " + stuff.amount);
		// no reason to print this yet since it doesn't work
		// console.log("Your Total is: $" + totalAmount);

		transaction(stuff);

})}

	var transaction = function(stuff) {

		var newStock = { StockQuantity: parseInt(stuff.amount) };

		var itemInfo = { ItemID: stuff.item };

		con.query('update products set ? where ?', [newStock, itemInfo], function(err, res) {
			if (err) throw err;
			console.log("Your purchase is complete");
			con.end();
		});

	};


