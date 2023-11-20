function generateTables() {
    var num = parseInt(document.getElementById("Given").value);
    var tableForLoop = "";
    var tableWhileLoop = "";
    var tableDoWhileLoop = "";

    // Multiplication Table using For Loop
    for (var i = 1; i <= 10; i++) {
        tableForLoop += `${num} x ${i} = ${num * i}<br>`;
    }
    document.getElementById("displayf").innerHTML = tableForLoop;

    // Multiplication Table using While Loop
    var j = 1;
    while (j <= 10) {
        tableWhileLoop += `${num} x ${j} = ${num * j}<br>`;
        j++;
    }
    document.getElementById("displayw").innerHTML = tableWhileLoop;

    // Multiplication Table using Do-While Loop
    var k = 1;
    do {
        tableDoWhileLoop += `${num} x ${k} = ${num * k}<br>`;
        k++;
    } while (k <= 10);
    document.getElementById("displayd").innerHTML = tableDoWhileLoop;
}
