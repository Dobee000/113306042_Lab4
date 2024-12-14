const drumSounds = {
  "w": "sounds/crash.mp3",
  "a": "sounds/kick-bass.mp3",
  "s": "sounds/snare.mp3",
  "d": "sounds/tom-1.mp3",
  "j": "sounds/tom-2.mp3",
  "k": "sounds/tom-3.mp3",
  "l": "sounds/tom-4.mp3"
};

const drumButtons = document.querySelectorAll(".drum");
drumButtons.forEach(button => {
  button.addEventListener("click", function() {
    const key = this.innerHTML; 
    playSound(key);
    buttonAnimation(key); 
  });
});

document.addEventListener("keydown", function(event) {
  const key = event.key; 
  if (drumSounds[key]) { 
    playSound(key);
    buttonAnimation(key);
  }
});

function playSound(key) {
  const soundFile = drumSounds[key];
  if (soundFile) {
    const audio = new Audio(soundFile); 
    audio.play(); 
  }
}

function buttonAnimation(key) {
  const activeButton = document.querySelector("." + key); 
  if (activeButton) {
    activeButton.classList.add("pressed"); 
    setTimeout(() => {
      activeButton.classList.remove("pressed"); 
    }, 100);
  }
}
