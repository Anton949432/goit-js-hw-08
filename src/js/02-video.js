import throttle from 'lodash/throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const saveCurrentTime = throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', time);
}, 1000);

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    saveCurrentTime(currentTime);
});

const savedTime = parseFloat(localStorage.getItem('videoplayer-current-time'));
if (!isNaN(savedTime)) {
    player.setCurrentTime(savedTime);
}

