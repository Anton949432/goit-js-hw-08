import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

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

const saveFormState = () => {
    const formState = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const saveFormStateThrottled = throttle(saveFormState, 500);

emailInput.addEventListener('input', saveFormStateThrottled);
messageTextarea.addEventListener('input', saveFormStateThrottled);

const loadFormState = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const formState = JSON.parse(savedState);
        emailInput.value = formState.email || '';
        messageTextarea.value = formState.message || '';
    }
};

loadFormState();

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageTextarea.value.trim();

    if (!email || !message) {
        alert('Please fill in both fields: Email and Message');
        return;
    }

    console.log('Form submitted with data:');
    console.log('Email:', email);
    console.log('Message:', message);

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageTextarea.value = '';
});

