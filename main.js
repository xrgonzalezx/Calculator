//Declare and initialize my button operations
var add = document.getElementById("add"),
  subtract = document.getElementById("subtract"),
  multiply = document.getElementById("multiply"),
  divide = document.getElementById("divide"),
  clearbutton = document.getElementById("clear"),
  equals = document.getElementById("equals");

//array to store numbers class
var allnumbers = [];

//Declare numbers variable for 'for' loop
var numbers = document.querySelectorAll(".number");

//make buttons/ numbers and signs able to fire off functions using eventlisner
//  all digits have the .number class , all
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function(event) {
    var valueAsInteger = parseInt(event.target.value);
    allnumbers.push(valueAsInteger);
    document.getElementById("results").value += event.target.value;
  })
};
// add eventListner to operator signs
add.addEventListener("click", function(event) {
  document.getElementById("results").value += "+";
  allnumbers.push("+");
});

subtract.addEventListener("click", function(event) {
  document.getElementById("results").value += "-";
  allnumbers.push("-");
});

divide.addEventListener("click", function(event) {
  document.getElementById("results").value += "/";
  allnumbers.push("/");
});

multiply.addEventListener("click", function(event) {
  document.getElementById("results").value += "*";
  allnumbers.push("*");
});
// When C clicked adding empty string to value ""
clear.addEventListener("click", function(event) {
  document.getElementById("results").value = "";
  allnumbers = [];
});

equals.addEventListener("click", function(event) {
  var a = allnumbers[0];
  var b = allnumbers[2];
	var c = allnumbers[4]
  if (allnumbers[1] === "+") {
    var result = a + b;
  } else if (allnumbers[1] === "-") {
    var result = a - b;
  } else if (allnumbers[1] === "/") {
    var result = a / b;
  } else if (allnumbers[1] === "*") {
    var result = a * b;
  } else if (allnumbers[1,3] === "+") {
    var result = a + b + c;
  } else if (allnumbers[1,3] === "-") {
    var result = a - b - c;
  } else if (allnumbers[1,3] === "/") {
    var result = a / b / c;
  } else if (allnumbers[1,3] === "*") {
    var result = a * b * c;
  }
  console.log(allnumbers);
  document.getElementById("results").value = result;
});
