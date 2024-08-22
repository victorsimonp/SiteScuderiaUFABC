document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const inicioSection = document.getElementById('inicio');

    function updateHeaderBackground() {
        const sectionTop = inicioSection.offsetTop;
        const sectionHeight = inicioSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Se a seção de início estiver visível, aplica a classe 'bg-inicio'
            header.classList.add('bg-inicio');
            header.classList.remove('bg-white');
        } else {
            // Se não, aplica a classe 'bg-white'
            header.classList.add('bg-white');
            header.classList.remove('bg-inicio');
        }
    }

    // Atualiza a cor do cabeçalho ao rolar a página
    window.addEventListener('scroll', updateHeaderBackground);

    // Atualiza a cor do cabeçalho quando a página carrega
    updateHeaderBackground();
});
