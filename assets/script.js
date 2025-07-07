// Animação Digitação

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text');
    if (!textElement) return;

    const fullText = textElement.textContent;
    textElement.textContent = '';
    textElement.classList.add('typing-active');

    let charIndex = 0;
    const typingSpeed = 50;
    const cursorElement = document.createElement('span');
    cursorElement.classList.add('cursor');
    textElement.appendChild(cursorElement);

    function typeChar() {
        if (charIndex < fullText.length) {
            const char = fullText.charAt(charIndex);
            textElement.insertBefore(document.createTextNode(char), cursorElement);
            charIndex++;
            setTimeout(typeChar, typingSpeed);
        } else {
            cursorElement.remove();
        }
    }

    typeChar();
});