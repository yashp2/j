var arr = [];
var size = 0;

function SetSize() {
    size = parseInt(document.getElementById("size").value);
    if (size < 0) {
        document.getElementById("display").innerHTML = "Array size cannot be negative.";
    } else {
        document.getElementById("display").innerHTML = "Array size set to " + size;
    }
}

function Enter() {
    if (size === 0) {
        document.getElementById("display").innerHTML = "Set the array size first.";
        return;
    }
    let s = document.getElementById("ar").value;
    arr = s.split(",").map(Number);
    if (arr.length > size) {
        document.getElementById("display").innerHTML = "Input array size exceeds the set size.";
        return;
    }
    document.getElementById("display").innerHTML = "[" + arr + "]";
}

function Printy() {
    document.getElementById("display").innerHTML = "[" + arr + "]";
}


    function Delete() {
        let c = parseInt(document.getElementById("d1").value);
        if (arr.length === 0) {
            document.getElementById("display").innerHTML = "Array is empty.";
            return;
        }
    
        if (arr.indexOf(c) === -1) {
            document.getElementById("display").innerHTML = "Element " + c + " is not present in the array.";
            return;
        }
    
        arr = arr.filter(ele => ele !== c);
        document.getElementById("display").innerHTML = "[" + arr + "]";
    }
    
    


function CheckElement() {
    let d = parseInt(document.getElementById("c1").value);
    if (arr.includes(d)) {
        document.getElementById("display").innerHTML = "Element " + d + " is present in the array"+" at "+arr.indexOf(d);
    } else {
        document.getElementById("display").innerHTML = "Element " + d + " is not present in the array.";
    }
}

function EmptyArray() {
    arr = [];
    document.getElementById("display").innerHTML = "Array emptied.";
}
