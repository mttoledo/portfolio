/* Animação Digitação */
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


/* Animação Transparência do Header */
const header = document.querySelector('header');
const scroll_header = 50;

window.addEventListener('scroll', () => {
    if (window.scrollY > scroll_header) {
        header.classList.add('scrolled'); // Adiciona a classe 'scrolled'
    } else {
        header.classList.remove('scrolled'); // Remove a classe 'scrolled'
    }
});

/* Inicialização da Biblioteca SwiperJS */
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 22,
  autoHeight: true,
  speed: 400,

  autoplay: {
   delay: 4000,
 },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    620: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});