import throttle from 'lodash.throttle';

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

    const email = emailInput.value;
    const message = messageTextarea.value;

    console.log('Form submitted with data:');
    console.log('Email:', email);
    console.log('Message:', message);

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageTextarea.value = '';
});

