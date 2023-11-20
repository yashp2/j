// script.js
document.getElementById("greenLink").addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "yellow";
});

document.getElementById("greenLink").addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "violet"; // Set the default color when mouseout
});

document.getElementById("redLink").addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "orange";
});

document.getElementById("redLink").addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "violet"; // Set the default color when mouseout
});

/*document.getElementById("cyanLink").addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "violet";
});*/

/*document.getElementById("cyanLink").addEventListener("mouseout", function() {
    document.body.style.backgroundColor = ""; // Set the default color when mouseout
});*/

document.getElementById("blackInput").addEventListener("focus", function() {
    document.body.style.backgroundColor = "black";
});
document.getElementById("blackInput").addEventListener("blur", function() {
    document.body.style.backgroundColor = "violet";
});
