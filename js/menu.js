document.addEventListener('DOMContentLoaded', function() {
    const hamburguer = document.querySelector('.hamburguer');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburguer && mobileMenu) {
        hamburguer.addEventListener('click', function() {
            // Alterna a classe active no hambúrguer
            hamburguer.classList.toggle('active');
            // Alterna a visibilidade do menu
            if (mobileMenu.classList.contains('transform') && mobileMenu.classList.contains('-translate-x-full')) {
                mobileMenu.classList.remove('transform', '-translate-x-full');
                mobileMenu.classList.add('open');
            } else {
                mobileMenu.classList.remove('open');
                mobileMenu.classList.add('transform', '-translate-x-full');
            }
        });
    } else {
        console.error('Elementos não encontrados: certifique-se de que .hamburguer e #mobile-menu existem no DOM.');
    }
});
