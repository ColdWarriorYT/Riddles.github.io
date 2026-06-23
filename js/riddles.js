const form = document.getElementById('answer-form');
const input = document.getElementById('answer-input');
const message = document.getElementById('answer-message');
const finalSection = document.getElementById('final-riddle-section');
const finalForm = document.getElementById('final-answer-form');
const finalInput = document.getElementById('final-answer-input');
const finalMessage = document.getElementById('final-answer-message');

const hintButtons = Array.from(document.querySelectorAll('[data-hint-target]'));

hintButtons.forEach(button => {
    const targetId = button.getAttribute('data-hint-target');
    const hint = document.getElementById(targetId);

    if (!hint) {
        return;
    }

    button.addEventListener('click', () => {
        const isHidden = hint.classList.contains('hidden');

        if (isHidden) {
            hint.classList.remove('hidden');
            button.textContent = 'Hide hint';
            button.setAttribute('aria-expanded', 'true');
        } else {
            hint.classList.add('hidden');
            button.textContent = 'Show hint';
            button.setAttribute('aria-expanded', 'false');
        }
    });
});

if (form && input && message) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const answer = input.value.trim().toLowerCase();

        if (!answer) {
            message.textContent = 'Please enter an answer.';
            message.className = 'answer-message warning';
            return;
        }

        const correctAnswer = document.getElementById('correct-answer')?.textContent
            ?.replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();

        if (answer === correctAnswer) {
            message.textContent = 'Correct! Well done.';
            message.className = 'answer-message success';

            if (finalSection) {
                finalSection.classList.remove('hidden');
            }
        } else {
            message.textContent = 'Incorrect. Try again.';
            message.className = 'answer-message error';
        }
    });
}

if (finalForm && finalInput && finalMessage) {
    finalForm.addEventListener('submit', event => {
        event.preventDefault();

        const answer = finalInput.value.trim().toLowerCase();

        if (!answer) {
            finalMessage.textContent = 'Please enter your answer.';
            finalMessage.className = 'answer-message warning';
            return;
        }

        const correctFinalAnswer = document.getElementById('final-answer')?.textContent
            ?.replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();

        if (answer === correctFinalAnswer) {
            finalMessage.textContent = 'You solved the riddle!';
            finalMessage.className = 'answer-message success';
        } else {
            finalMessage.textContent = 'Not quite. Try again.';
            finalMessage.className = 'answer-message error';
        }
    });
}
