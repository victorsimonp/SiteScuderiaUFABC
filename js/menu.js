document.addEventListener('DOMContentLoaded', function() {
    const hamburguer = document.querySelector('.hamburguer');
    const cabecalhoContainer = document.querySelector('.cabecalho__container');
    const menuLinks = document.querySelectorAll('.lista_menu a');

    // Verifique se os elementos existem antes de adicionar o evento
    if (hamburguer && cabecalhoContainer) {
        hamburguer.addEventListener('click', function() {
            cabecalhoContainer.classList.toggle('active');
        });

        // Adiciona o evento de clique em cada link do menu
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Fecha o menu ao clicar em um link
                cabecalhoContainer.classList.remove('active');
            });
        });
    } else {
        console.error('Elementos não encontrados: certifique-se de que .hamburguer e .cabecalho__container existem no DOM.');
    }
});
