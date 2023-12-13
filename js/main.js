const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');

let rolling = false;

function rollDice() {
    if (rolling) return;

    rolling = true;
    rollButton.disabled = true;

    const result = Math.floor(Math.random() * 100) + 1;
    const duration = 1000; // Duración de la animación en milisegundos

    dice.style.transform = `rotateX(1440deg) rotateY(720deg)`;
    setTimeout(() => {
        dice.style.transition = `transform ${duration / 1000}s ease-out`;
        dice.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }, 100);

    setTimeout(() => {
        // Mostrar el resultado después de la animación
        dice.style.transition = 'none';
        dice.style.transform = `rotateX(0deg) rotateY(0deg)`;
        dice.innerHTML = `<div class="numero">${result}</div>`;
        rolling = false;
        rollButton.disabled = false;
    }, duration);
}
