var buttons = document.querySelectorAll(".drum"); //Taking all the drum button

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {  //adding click event on every drum button
   document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
       var key=this.innerHTML;
       musicPlay(key);
       buttonAnimation(key);
       
   })
}

document.addEventListener("keydown",  function (event) {
    musicPlay(event.key);
    buttonAnimation(event.key);
})

function musicPlay(key) {
    switch (key) {
        case 'w':
            var crush = new Audio('sounds/crash.mp3');
            crush.play();
            break;
        case 'a':
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;
        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'k':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            alert("Eneter the correct button");
            break;
    }
}

function buttonAnimation(button) {
    var k=document.querySelector("."+button);
    k.classList.add("pressed");
    setTimeout(() => {
        k.classList.remove("pressed")
    }, 100);
}


