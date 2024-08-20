document.addEventListener('DOMContentLoaded', function() {
    const hamburguer = document.querySelector('.hamburguer');
    const cabecalhoContainer = document.querySelector('.cabecalho__container');

    // Verifique se os elementos existem antes de adicionar o evento
    if (hamburguer && cabecalhoContainer) {
        hamburguer.addEventListener('click', function() {
            cabecalhoContainer.classList.toggle('active');
        });
    } else {
        console.error('Elementos não encontrados: certifique-se de que .hamburguer e .cabecalho__container existem no DOM.');
    }
});
