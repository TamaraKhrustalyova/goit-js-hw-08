
import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function onPlay(data) {
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(onPlay, 1000));

document.addEventListener(timeupdate, setTimeAfterReload);

const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0;

function setTimeAfterReload() {
    if (currentTime === undefined) {
        player.setCurrentTime(0)
    } 
    player.setCurrentTime(currentTime)
}