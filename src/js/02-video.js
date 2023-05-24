
import player from '@vimeo/player';
import throttle from "lodash.throttle";

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function onPlay(data) {
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY));

player.setCurrentTime(currentTime);