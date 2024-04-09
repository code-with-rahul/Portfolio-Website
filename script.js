// Toggle menu

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active')
}

// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// Sticky Navbar

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle and nav

menuIcon.classList.remove('fa-xmark');
navBar.classList.remove('active')

// Scroll reveal JS

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'left' });

// typed JS

const typed = new Typed('.animated-text', {
    strings: ['Frontend Developer', 'Web Designer', 'WordPress Designer'],
    typeSpeed: 70,
    backspeed: 70,
    backDelay: 1000,
    loop: true,
});