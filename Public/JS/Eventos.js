document.getElementById('pesquisa').addEventListener('input', function () {
    const filtro = this.value.toLowerCase();
    const cartoes = document.querySelectorAll('.cartao');

    cartoes.forEach(cartao => {
        const titulo = cartao.querySelector('h2').textContent.toLowerCase();
        const data = cartao.querySelector('.informacoes-autor p').textContent.toLowerCase();

        if (titulo.includes(filtro) || data.includes(filtro)) {
            cartao.style.display = 'block';
        } else {
            cartao.style.display = 'none';
        }
    });
});