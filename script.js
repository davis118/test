var coins = 0;
var cps = 0;
var a = document.getElementById("a");
var acost = 100;
var acps=1;
var bcost = 500;
var bcps=10;
var ccost=2000;
var ccps=100;
var dcost=10000;
var dcps=1000;
function updatedisplays() {
  if (coins < acost) {
    document.getElementById("a").style.visibility = "hidden";
  } else {
    document.getElementById("a").style.visibility = "visible";
  }
  if (coins < bcost) {
    document.getElementById("b").style.visibility = "hidden";
  } else {
    document.getElementById("b").style.visibility = "visible";
  }
  if (coins < ccost) {
    document.getElementById("c").style.visibility = "hidden";
  } else {
    document.getElementById("c").style.visibility = "visible";
  }
  if (coins < dcost) {
    document.getElementById("d").style.visibility = "hidden";
  } else {
    document.getElementById("d").style.visibility = "visible";
  }
  if (cps != 0) {
    document.getElementById("numofcoins").innerHTML =
      "Congrats, you have " +
      coins +
      " coins and you make " +
      cps +
      " coins per second!";
  }
  if (coins < 0.000001) {
    document.getElementById("numofcoins").innerHTML =
      "You're poor lol, you should probably get some coins ;)";
  } else {
    document.getElementById("numofcoins").innerHTML =
      "Congrats, you have " + coins + " coins";
  }
}
function gametick() {
  getcoin((cps * 2) / 1000);
}
function getcoin(increment) {
  coins += increment;
  coins = Math.round(coins * 10000) / 10000;
  updatedisplays();
}
function hirea() {
  cps+=acps;
  coins = coins - acost;
  acost = Math.floor(acost * 1.1);
  document.getElementById("a").innerHTML =
    "Hire a gatherer (" + acost + " coins)";
  updatedisplays();
}
function hireb() {
  cps+=bcps;
  coins = coins - bcost;
  bcost = Math.floor(bcost * 1.1);
  document.getElementById("b").innerHTML =
    "Buy a McDonalds' (" + bcost + " coins)";
  updatedisplays();
}
function hirec() {
  cps+=ccps;
  coins = coins - ccost;
  ccost = Math.floor(ccost * 1.1);
  document.getElementById("c").innerHTML =
    "Buy a fancy restaurant (" + ccost + " coins)";
  updatedisplays();
}
getcoin(cps);
var myVar = setInterval(gametick, 2);

function setColor() {
  var x = document.body;
  x.style.backgroundColor =
    x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}
