const correctAnswer = 'one';

const form = document.getElementById('answer-form');
const input = document.getElementById('answer-input');
const message = document.getElementById('answer-message');

if (form && input && message) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const answer = input.value.trim().toLowerCase();

        if (!answer) {
            message.textContent = 'Please enter an answer.';
            message.className = 'answer-message warning';
            return;
        }

        if (answer === correctAnswer.toLowerCase()) {
            message.textContent = 'Correct! Well done.';
            message.className = 'answer-message success';
        } else {
            message.textContent = 'Incorrect. Try again.';
            message.className = 'answer-message error';
        }
    });
}
