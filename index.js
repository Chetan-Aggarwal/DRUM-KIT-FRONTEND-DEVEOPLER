for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {


        // this.style.color="white";

        var buttonname = this.innerHTML;
        makesound(buttonname);
        animation(buttonname);

    });
}


document.addEventListener("keydown", function(event) {
    makesound(event.key);
    animation(event.key);
});


function makesound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();

            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();

            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();

            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();

            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();

            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();

            break;

        default:

            break;
    }

}

function animation(currkey) {
    var activebutton = document.querySelector("." + currkey);
    activebutton.classList.add("pressed");

    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}