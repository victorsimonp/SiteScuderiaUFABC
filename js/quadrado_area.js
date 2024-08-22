document.querySelectorAll('#flip-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.querySelector('.front-card').classList.add('hidden');
        card.querySelector('.back-card').classList.remove('hidden');
    });

    card.addEventListener('mouseout', () => {
        card.querySelector('.front-card').classList.remove('hidden');
        card.querySelector('.back-card').classList.add('hidden');
    });
});
