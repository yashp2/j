var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; // phone number regex
var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email regex;
var nameRegex = /^[A-Za-z\s]+$/; // Name should not have alphanumeric characters
var cityRegex = /^[A-Za-z\s]+$/; // City should not have alphanumeric characters
var stateRegex = /^[A-Za-z\s]+$/; // State should not have alphanumeric characters

function submitForm() {
    let name = String(document.getElementById("fname").value);
    let mobile = String(document.getElementById("mnumber").value);
    let email = String(document.getElementById("email").value);
    let gender;
    let address = String(document.getElementById("address").value);
    let city = String(document.getElementById("city").value);
    let state = String(document.getElementById("state").value);

    if (name.length == 0 || name.length < 3 || !name.match(nameRegex)) {
        if (name.length == 0) {
            alert("Name field is empty");
        } else if (name.length < 3) {
            alert("Name should have at least 3 characters");
        } else if (!name.match(nameRegex)) {
            alert("Name should not contain alphanumeric characters");
        }
        return;
    }

    if (mobile.length == 0 || !re.test(mobile)) {
        if (mobile.length == 0) {
            alert("Mobile field is empty");
        } else if (!re.test(mobile)) {
            alert("Invalid mobile number");
        }
        return;
    }

    if (email.length == 0 || !em.test(email)) {
        if (email.length == 0) {
            alert("Email field is empty");
        } else if (!em.test(email)) {
            alert("Invalid email");
        }
        return;
    }

    if (document.getElementById("male").checked == true) {
        gender = "Male";
    } else if (document.getElementById("female").checked == true) {
        gender = "Female";
    } else if (document.getElementById("other").checked == true) {
        gender = "Other";
    } else {
        alert("Please select a gender");
        return;
    }

    if (address.length == 0 || address.length < 3) {
        if (address.length == 0) {
            alert("Address field is empty");
        } else {
            alert("Address must have at least 3 characters");
        }
        return;
    }

    if (city.length == 0 || !city.match(cityRegex)) {
        if (city.length == 0) {
            alert("City field is empty");
        } else if (!city.match(cityRegex)) {
            alert("City should not contain alphanumeric characters");
        }
        return;
    }

    if (state.length == 0 || !state.match(stateRegex)) {
        if (state.length == 0) {
            alert("State field is empty");
        } else if (!state.match(stateRegex)) {
            alert("State should not contain alphanumeric characters");
        }
        return;
    }

    let msg = "Name: " + name + "\nEmail: " + email + "\nGender: " + gender + "\nMobile: " + mobile + "\nAddress: " + address + "\nCity: " + city + "\nState: " + state + "\n";
    alert(msg);
    // Redirect to another page (confirm.html)
    window.location.href = "confirm.html";
}
