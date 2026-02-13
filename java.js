const bg = document.querySelector('.background');
const symbols = ['❤️', '💖', '🧸', '🐻', '💕', '🐨'];

function createSymbol() {
    const span = document.createElement('span');
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = (6 + Math.random() * 6) + 's';
    span.style.fontSize = (1 + Math.random() * 2) + 'rem';
    bg.appendChild(span);

    // Supprime après animation
    setTimeout(() => {
        span.remove();
    }, 6000);
}

// Génère en continu
setInterval(createSymbol, 200);


const btnNo = document.querySelector('.btn-no');
const buttonsContainer = document.querySelector('.buttons');

btnNo.addEventListener('mouseover', () => {
    const containerWidth = buttonsContainer.offsetWidth;
    const containerHeight = buttonsContainer.offsetHeight;

    // Position aléatoire dans le container
    const newLeft = Math.random() * (containerWidth - btnNo.offsetWidth);
    const newTop = Math.random() * (containerHeight - btnNo.offsetHeight);

    btnNo.style.left = newLeft + 'px';
    btnNo.style.top = newTop + 'px';
});


const playBtn = document.getElementById('play-music');
const music = document.getElementById('bg-music');

playBtn.addEventListener('click', () => {
    music.play();
});
