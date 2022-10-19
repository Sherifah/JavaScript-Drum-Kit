//Listening for a key down event

window.addEventListener('keydown', playSound);

function playSound(e) {
    //console.log(e.key);

    //Check if the specific key selected
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!audio) return; //stops the function from running all together if the selected key is not part

    //To control the successive playing of audio
    audio.currentTime = 0; //Rewind to the start 
    audio.play();
    key.classList.add('playing');
};

//Transition end event
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    //Remove the playing class on the key after the transition
    this.classList.remove('playing');
}
