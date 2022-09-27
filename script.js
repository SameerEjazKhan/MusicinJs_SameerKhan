
var numberOfDrumButton = document.querySelectorAll(".drum").length

for (let i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click',
        function () {
            var buttonInnerHTML = this.innerHTML;
            console.log(buttonInnerHTML);
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        }

    )
}



//keyboard keypress
document.addEventListener('keypress',
    function (event) {
        console.log(event);
        console.log(event.key);
        makeSound(event.key);
        buttonAnimation(event.key);
    }
);


function makeSound(key) {
    switch (key) {
        // case 's':
        //     var tom1 = new Audio('assets/music/tom1-1.mp3');
        //     tom1.play;
        // break;

        case 's':
            var musicObject = new Audio('assets/music/tom-1.mp3');
            musicObject.play();
            break;

        case 'r':
            var musicObject = new Audio('assets/music/tom-2.mp3');
            musicObject.play();
            break;

        case 'g':
            var musicObject = new Audio('assets/music/tom-3.mp3');
            musicObject.play();
            break;

        case 'm':
            var musicObject = new Audio('assets/music/tom-4.mp3');
            musicObject.play();
            break;

        case 'p':
            var musicObject = new Audio('assets/music/snare.mp3');
            musicObject.play();
            break;

        case 'd':
            var musicObject = new Audio('assets/music/crash.mp3');
            musicObject.play();
            break;

        case 'n':
            var musicObject = new Audio('assets/music/kick-bass.mp3');
            musicObject.play();
            break;




    }

}

function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(
    function(){
        activeButton.classList.remove("pressed");
    }
    ,100)
    



}



