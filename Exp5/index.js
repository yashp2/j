var countdownInterval;

function startCountdown() {
    var userInputValue = document.getElementById("userInput").value;
    var userDeadline = new Date(userInputValue).getTime();
    var now = new Date().getTime();

    // Clear any existing countdown interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Check if the user input date and time is in the future
    if (userDeadline > now) {
        countdownInterval = setInterval(function() {
            var now = new Date().getTime();
            var t = userDeadline - now;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("demo").innerHTML =
                days + "d " + hours + "h " + minutes + "m " + seconds + "s";
            if (t < 0) {
                clearInterval(countdownInterval);
                document.getElementById("demo").innerHTML = "Expired";
            }
        }, 1000);
    } else {
        alert("Please enter a future date and time.");
    }
}
