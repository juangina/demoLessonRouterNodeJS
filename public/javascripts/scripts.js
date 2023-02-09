// Create variables so we can refer to DOM elements on the page.
const playBtn = document.querySelector('#play_fe');
const stopBtn = document.querySelector('#stop_fe');
const nextBtn = document.querySelector('#next_fe');
const prevBtn = document.querySelector('#prev_fe');
const playerMessage = document.querySelector('#message_fe');
let isPlaying = false;
/*
 * Main player functionality
 */
function play() {
    // We'll pause if we're already playing
    if (isPlaying) {
        // console.log('PAUSING SONG');
        playerMessage.innerHTML = "Pausing Song";
        showPlayButton();
        isPlaying = false;
    } else {
        // console.log('PLAYING SONG');
        playerMessage.innerHTML = "Playing Song";
        showPauseButton();
        isPlaying = true;
    }
};
function stop() {
    // console.log('STOPPING SONG');
    playerMessage.innerHTML = "Stopping Song";
    isPlaying = false;
    showPlayButton();
};
function forward() {
    // console.log('Going to next song');
    playerMessage.innerHTML = "Going to Next Song...";
    stop();
    play();
    playerMessage.innerHTML = "Playing Song";
}
function back() {
    // console.log('Going to previous song...');
    playerMessage.innerHTML = "Going to Previous Song...";
    stop();
    play();
    playerMessage.innerHTML = "Playing Song";
}
/*
 * Functions for toggling the icon on the play/pause button.
 */
// Changes the class name to show the "play" icon.
function showPlayButton() {
    const playClasses = ['fas', 'fa-play'];
    const icon = playBtn.querySelector('i');
    icon.className = ''; // make empty
    playClasses.forEach(cn => icon.classList.add(cn));
}
// Changes the class name to show the "pause" icon.
function showPauseButton() {
    const pauseClasses = ['fas', 'fa-pause'];
    const icon = playBtn.querySelector('i');
    icon.className = ''; // make empty
    pauseClasses.forEach(cn => icon.classList.add(cn));
}
// Connect the 'click' event for each button to a custom function.
playBtn.addEventListener('click', play);
stopBtn.addEventListener('click', stop);
nextBtn.addEventListener('click', forward);
prevBtn.addEventListener('click', back);
playerMessage.innerHTML = "Player Messages";