
var currentAudio = null;

document.getElementById("audio-1").addEventListener("click", function () {
    makeSound("red-glow");
});
document.getElementById("audio-2").addEventListener("click", function () {
    makeSound("blue-glow");
});
document.getElementById("audio-3").addEventListener("click", function () {
    makeSound("green-glow");
});
document.getElementById("audio-4").addEventListener("click", function () {
    makeSound("yellow-glow");
});
document.getElementById("audio-5").addEventListener("click", function () {
    makeSound("pink-glow");
});
document.getElementById("audio-6").addEventListener("click", function () {
    makeSound("purple-glow");
});


function makeSound(keyClass) {
    var soundFile = '';
    switch (keyClass) {
        case "red-glow":
            soundFile = "sounds/mixkit-game-bonus-reached.mp3";
            break;
        case "blue-glow":
            soundFile = "sounds/fart.mp3";
            break;
        case "green-glow":
            soundFile = "sounds/evil-laugh.mp3";
            break;
        case "yellow-glow":
            soundFile = "sounds/baby-laughing.mp3";
            break;
        case "pink-glow":
            soundFile = "sounds/coin.mp3";
            break;
        case "purple-glow":
            soundFile = "sounds/no-luck.mp3";
            break;
        default:
            console.log("Unmapped button class: " + keyClass);
            return;
    }

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    var audio = new Audio(soundFile);

    audio.play().catch(error => {
        console.log("Error playing audio: " + soundFile, error);
    });

    currentAudio = audio;

}
