var message  = "Would you like to add, remove, view, or exit?";
var addItem = "How many items would you like to add?";
var removeItem = "How many items do you want to remove?"
let shoppingList = ["apples", "bananas","cheese","bread","marshmallows"];
var makeList = true;



while (makeList === true) {
    var userInput = prompt(message);
    if (userInput === "add") {
        var addItem2 = prompt(addItem);
        for (let i = 0; i < addItem2; i++) {
            var addItem3 = prompt("Add: ");
            shoppingList.push(addItem3);
        }
    } 

    
     if (userInput === "remove") {
        var removeItem2 = prompt(removeItem);
        for (let i = 0; i < removeItem2; i++) {
            var removeItem3 = prompt("Remove: ");
            shoppingList.splice( shoppingList.indexOf(removeItem3), 1);
        }


    }
      if (userInput === "view") {
        alert(shoppingList.join('\n'));
    }

    if (userInput === "exit") {
        makeList = false;
    }
}