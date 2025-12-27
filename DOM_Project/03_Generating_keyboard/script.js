document.addEventListener('keydown', (event) => {
    const key = event.key === ' ' ? 'Space' : event.key;
    const code = event.keyCode || event.which;

    document.getElementById('key').textContent = key;
    document.getElementById('code').textContent = code;

    playClickSound();
});

function playClickSound() {
    const sound = document.getElementById('click-sound');
    sound.currentTime = 0; // Reset the audio to the beginning
    sound.play(); // Play the sound
}


