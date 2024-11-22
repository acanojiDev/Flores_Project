
document.addEventListener('DOMContentLoaded', () => {
    // Create petals for each flower
    const roses = document.querySelectorAll('.rose');
    const tulips = document.querySelectorAll('.tulip');
    const daisies = document.querySelectorAll('.daisy');

    // Create rose petals (20 petals)
    roses.forEach(rose => {
        for (let i = 0; i < 20; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.setProperty('--angle', `${(360 / 20) * i}deg`);
            petal.style.setProperty('animation-delay', `${i * 0.1}s`);
            rose.appendChild(petal);
        }
    });

    // Create tulip petals (6 petals)
    tulips.forEach(tulip => {
        for (let i = 0; i < 6; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.setProperty('--angle', `${(360 / 6) * i}deg`);
            petal.style.setProperty('animation-delay', `${i * 0.1}s`);
            tulip.appendChild(petal);
        }
    });

    // Create daisy petals (12 petals)
    daisies.forEach(daisy => {
        for (let i = 0; i < 12; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.setProperty('--angle', `${(360 / 12) * i}deg`);
            petal.style.setProperty('animation-delay', `${i * 0.1}s`);
            daisy.appendChild(petal);
        }
    });
});
