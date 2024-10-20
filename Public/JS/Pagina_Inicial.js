///EEEE do main
document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector('.main-container');
    const observerOptions = {
        root: null,
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    observer.observe(mainContainer);
});




// Aqui e do  quem somos
document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById('quem-somos');
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInEffect');
                entry.target.style.opacity = '1'; // Define a opacidade para 1 quando a animação começar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(section);
});

//Aqui dos cards dos valores
setTimeout(() => {
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.add('show');
}, 1000); 

const elementosAnimar = document.querySelectorAll('.animar');


const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
           
            entrada.target.classList.add('show');
           
            observer.unobserve(entrada.target);
        }
    });
});


elementosAnimar.forEach((elemento) => {
    observer.observe(elemento);
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('virar'); 
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        root: null, 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add('surgir');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card); 
    });
});

