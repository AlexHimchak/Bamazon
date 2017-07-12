var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "newuser",

    password: "taco",
    database: "products_db"
});

start();

function start() {


    inquirer

        .prompt([{
        type: "input",
        message: "What is the ID you would like to buy?",
        name: "id"
    }, {
        type: "input",
        message: "How many units would you like to buy?",
        name: "quantity"
    }, ])

    .then(function(inquirerResponse) {
        var item = inquirerResponse.id;
        var units = parseInt(inquirerResponse.quantity);
        readProducts(item, units);
        

    });


}

function readProducts(id, units) {

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        id--;

        if (units > res[id].stock_quantity) {
            console.log("Insuffient Quantity :(");
        }
        else{
            var expense = res[id].price * units;
            units = res[id].stock_quantity - units;

            updateProduct(id, units);
            console.log("Total expense is: " + expense);
        }
        //cost(id, expense);

        connection.end();
    });

}

function updateProduct(id, units) {
  console.log("Updating all store quantities...\n");
  id++;

  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: units
      },
      {
        item_id: id
      }
    ],
    function(err, res) {
     // console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
    //  deleteProduct();
    }
  );
  // logs the actual query being run
  console.log(query.sql);
}

// function cost(id, units){
//      connection.query("SELECT * FROM products", function(err, res) {
//         var total = res[id].price * units;
//         console.log("Total cost is: " + total);
        
        
//     });


// }

















