
import throttle from "lodash.throttle";
import Player from "@vimeo/player";


const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay(data) {
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0;

player.setCurrentTime(currentTime);
