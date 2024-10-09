setTimeout(() => {
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.add('show');
}, 1000); // Tempo em milissegundos

// Seleciona todos os elementos que têm a classe 'animar'
const elementosAnimar = document.querySelectorAll('.animar');

// Função de callback para o Intersection Observer
const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            // Adiciona a classe 'show' quando o elemento está visível
            entrada.target.classList.add('show');
            // Para parar de observar o elemento após o efeito
            observer.unobserve(entrada.target);
        }
    });
});

// Observa cada elemento com a classe 'animar'
elementosAnimar.forEach((elemento) => {
    observer.observe(elemento);
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('virar'); // Alterna a classe 'virar' para a animação
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        root: null, // Usa a viewport
        threshold: 0.1 // Quando 10% do cartão estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe para fazer os cartões surgirem
                entry.target.classList.add('surgir');
                observer.unobserve(entry.target); // Para não observar mais após o surgimento
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card); // Começa a observar cada cartão
    });
});
