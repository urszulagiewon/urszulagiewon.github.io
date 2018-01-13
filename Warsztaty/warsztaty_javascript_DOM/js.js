/* var firstParagraf = document.getElementsByTagName("p")[0];
function zmienTlo(e) {
    'use strict';
    firstParagraf.style.backgroundColor ="red";
}

firstParagraf.addEventListener('click', zmienTlo); */

var button = document.querySelector("h3");
var firstP = document.getElementsByTagName("p")[0];
var secondP = document.getElementsByTagName("p")[1];


function zmienTlo(e) {

    firstP.style.backgroundColor = "red";
    secondP.style.backgroundColor = "green";
}

document.querySelector("h3").onclick = zmienTlo;

// formularz 

var button = document.getElementById("button");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");

function getName(e) {
    e.preventDefault();
    console.log(document.getElementById("fname").value + " " + document.getElementById("lname").value);
}

button.addEventListener('click', getName);
