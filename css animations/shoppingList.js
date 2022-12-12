
let shoppingList = new Array();

shoppingList[0] = new Array("potatoes", "carrots", "peas");
shoppingList[1] = new Array("bananas", "apples", "grapes");
shoppingList[2] = new Array("cheese", "milk", "yoghurt");

console.log(shoppingList);
console.log(`The third item of the second list is ${shoppingList[1][2]}`);

// Another way of doing it 
let fruit =  ["Apples","Oranges","Pears"];
let meat =  ["Beef","Pork","Lamb"];
let veg = ["Carrots","Leeks","Onions"];
let itemArray = [fruit,meat,veg];

console.log(itemArray[1][2]);

/// Third way of doing it 
let shoppingList = [
  ["Apples","Oranges","Pears"],
  ["Beef","Pork","Lamb"],
  ["Carrots","Leeks","Onions"]
]
console.log(shoppingList[1][2]);