import throttle from 'lodash/throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
});

const savedTime = parseFloat(localStorage.getItem('videoplayer-current-time'));
if (!isNaN(savedTime)) {
    player.setCurrentTime(savedTime);
}

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const saveFormState = () => {
    const formState = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const saveFormStateThrottled = throttle(saveFormState, 1000);

emailInput.addEventListener('input', saveFormStateThrottled);
messageTextarea.addEventListener('input', saveFormStateThrottled);
