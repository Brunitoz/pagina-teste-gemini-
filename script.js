// Função para mover o carrossel
function scrollCarousel(direction) {
    const carousel = document.getElementById('photo-carousel');
    const scrollAmount = direction === 'left' ? -200 : 200;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
