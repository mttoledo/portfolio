/* Lógica do Menu Hambúrguer */
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('#nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

/* Animação Transparência do Header */
const header = document.querySelector('header');
const scroll_header = 50;

window.addEventListener('scroll', () => {
    if (window.scrollY > scroll_header) {
        header.classList.add('scrolled'); 
    } else {
        header.classList.remove('scrolled');
    }
});

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

/* Inicialização da Biblioteca SwiperJS */
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 22,
  autoHeight: true,
  speed: 400,

  autoplay: {
   delay: 8000,
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
    },
    1800: {
        slidesPerView: 4
    }
  }
});

/* Project Info DOM change */


/* Contact Info DOM change */
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.contact-links a');

    links.forEach(link => {
        link.setAttribute('data-original-text', link.textContent);

        link.addEventListener('mouseover', function() {
            if (this.id === 'contact-email') {
                this.textContent = 'Send me an e-mail!';
            } else if (this.id === 'contact-github') {
                this.textContent = 'See my projects!';
            } else if (this.id === 'contact-linkedin') {
                this.textContent = 'Connect with me!';
            } else if (this.id === 'contact-instagram') {
                this.textContent = 'Follow me on Insta!';
            }
        });

        link.addEventListener('mouseout', function() {
            this.textContent = this.getAttribute('data-original-text');
        });
    });
});