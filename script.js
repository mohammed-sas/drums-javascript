
function keyDownEvent(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    console.log(key);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

}

function removeTransition(e){
  
    
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');

// loop over all keys to add event listener
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown',keyDownEvent);
    

