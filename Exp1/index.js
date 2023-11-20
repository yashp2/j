function Areaoftriangle() {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);

    if (isValidTriangle(side1, side2, side3)) {
        var s = (side1 + side2 + side3) / 2;
        var Areaoft = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
        document.getElementById("displayt").innerHTML = Areaoft;
    } else {
        document.getElementById("displayt").innerHTML = "Incorrect triangle sides!";
    }
}

function isValidTriangle(side1, side2, side3) 
{
    return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1);
}

function Areaofrectangle() {
    var length = parseInt(document.getElementById("length").value);
    var breadth = parseInt(document.getElementById("breadth").value);
    if(length>0&& breadth>0)
    {
    var Areaofr = length * breadth;
    document.getElementById("displayr").innerHTML = Areaofr;}
    else
    {
        document.getElementById("displayr").innerHTML = "Enter positive values";
    }
}

function Areaofcircle() {
    var radius = parseInt(document.getElementById("radius").value);
    if(radius>=0)
{var Areaofc = Math.PI * radius * radius;
    document.getElementById("displayc").innerHTML = Areaofc;
}
else
{
    document.getElementById("displayc").innerHTML = "Invalid";
}
}

