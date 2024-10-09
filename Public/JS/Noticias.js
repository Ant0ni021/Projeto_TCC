const noticias = [
    {
        titulo: "Novo Programa de Apoio",
        descricao: "Lançamos um novo programa para oferecer suporte psicológico aos nossos guardas municipais.",
        link: "#"
    },
    {
        titulo: "Treinamento sobre Saúde Mental",
        descricao: "Realizamos um treinamento sobre saúde mental e a importância do autocuidado.",
        link: "#"
    },
    {
        titulo: "Campanha de Conscientização",
        descricao: "Iniciamos uma campanha de conscientização sobre a saúde mental na nossa comunidade.",
        link: "#"
    },
    {
        titulo: "Dia da Saúde Mental",
        descricao: "Em comemoração ao Dia da Saúde Mental, oferecemos palestras e workshops.",
        link: "#"
    },
    {
        titulo: "Apoio durante a Pandemia",
        descricao: "Oferecemos suporte psicológico gratuito aos guardas durante a pandemia de COVID-19.",
        link: "#"
    },
    {
        titulo: "Nova Parceria com Psicólogos",
        descricao: "Firmamos parceria com profissionais de psicologia para ampliar o suporte aos nossos guardas.",
        link: "#"
    },
    {
        titulo: "Eventos de Confraternização",
        descricao: "Promovemos eventos de confraternização para fortalecer o vínculo entre os guardas municipais.",
        link: "#"
    },
    {
        titulo: "Dia Internacional da Mulher",
        descricao: "Em homenagem ao Dia Internacional da Mulher, realizamos palestras sobre igualdade de gênero.",
        link: "#"
    },
];
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('noticias-container');
    
    noticias.forEach(noticia => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${noticia.titulo}</h2>
            <p>${noticia.descricao}</p>
            <a href="${noticia.link}" target="_blank">Leia mais</a>
        `;
        container.appendChild(card);
    });
});