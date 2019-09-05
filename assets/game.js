$(document).ready(function () {
    var goalNumber;
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    

    function reset() {
        for(var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("score", Math.floor(Math.random() * 11 + 1))
        }
        goalNumber = Math.floor(Math.random() * 101 + 19); playerTotal = 0;
        $("#total-score").text(userTotal);
        $("#target-score").text(targetNumber);
    }

    function initialize() {
        crystals = document.getElementsByTagName("img")
        for(var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("score", Math.floor(Math.random() * 11 + 1))
            crystals[i].addEventListener("click", (args) => {
                value = Math.round(args.target.getAttribute("score"))
                plaerTotal = playerTotal + value;
                $("#total-score").text(playerTotal);
                console.log(userTotal);
                logic();
            })
        }
        goalNumber = Math.floor(Math.random() * 101 + 19);
        $("#target-score").text(goalNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#total-score").text(playerTotal);
    }
    function logic() {
        if (playerTotal === goalNumber) {
            alert("You Win!");
            reset();
            wins++;
            $("#wins").text(wins);
        }
        else if (playerTotal > goalNumber) {
            alert("You lose!");
            reset();
            losses++;
            $("#losses").text(losses);
        }
    }

    initialize();
});