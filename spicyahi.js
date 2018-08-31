var spicyAhi = {
	fishType: "Ahi",
  sauce: "Sriracha & Mayo",
  price: 100.00,
  riceType: "White",
  ounces: 8
};

var amountAhi = prompt("What is the amount of spicy ahi you will be purchasing? (In Numbers)");
var totalOunces = spicyAhi.ounces * amountAhi;
window.alert("You are purchasing " + totalOunces + " ounces");
var totalPrice = amountAhi * spicyAhi.price;
window.alert("Your total is $" + totalPrice);