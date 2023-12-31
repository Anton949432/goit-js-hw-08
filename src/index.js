// js/vimeo-player.js
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    // Отримати поточний час відтворення і зберегти його у локальному сховищі
    localStorage.setItem('videoplayer-current-time', currentTime);
});

// Відтворити відео збережене в локальному сховищі (якщо таке є)
const savedTime = parseFloat(localStorage.getItem('videoplayer-current-time'));
if (!isNaN(savedTime)) {
    player.setCurrentTime(savedTime);
}
