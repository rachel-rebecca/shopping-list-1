
function promptAdd() {
   var bulletList = document.getElementById("bulletList");
   var userItem = document.getElementById("groceryItem");
   var li = document.createElement("li");
   li.setAttribute('id', userItem.value);
   li.appendChild(document.createTextNode(userItem.value))
   bulletList.appendChild(li);
   document.getElementById("groceryItem").value = ""; //resets input textbox to placeholder
    
}

function promptRemove() {
    var bulletList = document.getElementById("bulletList");
    var userItem = document.getElementById("groceryItem");
    var removeItem = document.getElementById(userItem.value);
    bulletList.removeChild(removeItem);
    document.getElementById("groceryItem").value = ""; //resets input textbox to placeholder
   
}

function clearAll() {
    var bulletList = document.getElementById("bulletList");
    bulletList.parentNode.removeChild(bulletList);
    location.reload(); //refreshes page to reload program
}