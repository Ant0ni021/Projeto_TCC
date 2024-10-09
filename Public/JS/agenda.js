let mesAtual = new Date().getMonth(); // Mês atual (0 a 11)
let anoAtual = new Date().getFullYear(); // Ano atual

// Função para renderizar o calendário
function renderizarCalendario() {
    const diasContainer = document.getElementById('dias');
    const mesAno = document.getElementById('mes-ano');

    // Limpa o calendário antes de renderizar
    diasContainer.innerHTML = '';

    // Define o nome dos meses
    const nomesMeses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    mesAno.textContent = `${nomesMeses[mesAtual]} ${anoAtual}`;

    // Calcula o primeiro dia do mês e o número de dias
    const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

    // Adiciona espaços vazios para os dias antes do primeiro dia do mês
    for (let i = 0; i < primeiroDia; i++) {
        const diaVazio = document.createElement('div');
        diaVazio.className = 'dia';
        diasContainer.appendChild(diaVazio);
    }

    // Adiciona os dias do mês
    for (let dia = 1; dia <= diasNoMes; dia++) {
        const diaElemento = document.createElement('div');
        diaElemento.className = 'dia';
        diaElemento.textContent = dia;

        // Adiciona evento de clique para mostrar um alerta (pode ser substituído por outra ação)
        diaElemento.addEventListener('click', () => {
            alert(`Você clicou no dia ${dia}`);
        });

        diasContainer.appendChild(diaElemento);
    }
}

// Navegação do calendário
document.getElementById('anterior').addEventListener('click', () => {
    if (mesAtual === 0) {
        mesAtual = 11; // Volta para dezembro
        anoAtual--; // Decrementa o ano
    } else {
        mesAtual--;
    }
    renderizarCalendario();
});

document.getElementById('proximo').addEventListener('click', () => {
    if (mesAtual === 11) {
        mesAtual = 0; // Volta para janeiro
        anoAtual++; // Incrementa o ano
    } else {
        mesAtual++;
    }
    renderizarCalendario();
});

// Renderiza o calendário pela primeira vez
renderizarCalendario();
