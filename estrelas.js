// Função para gerar estrelas aleatórias
function generateStars() {
    // Número de estrelas desejado
    var numStars = 100;

    // Loop para criar estrelas aleatórias
    for (var i = 0; i < numStars; i++) {
        var star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        document.body.appendChild(star);
    }
}

// Chama a função para gerar as estrelas ao carregar a página
window.onload = generateStars;

//Mover a barra de navegação
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');

    window.addEventListener('mousemove', function(event) {
        nav.style.top = event.clientY + 'px';
    });
});
