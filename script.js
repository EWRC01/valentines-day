document.addEventListener('DOMContentLoaded', function () {
    const garden = document.getElementById('garden');

    // Function to create a gerbera flower
    function createGerbera() {
        const gerbera = document.createElement('div');
        gerbera.classList.add('gerbera');

        const stem = document.createElement('div');
        stem.classList.add('stem');
        gerbera.appendChild(stem);

        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.innerText = '\1F33F'; /* Unicode for a flower symbol */
        gerbera.appendChild(flower);

        // Randomize position in the garden
        const x = Math.random() * (window.innerWidth - 40);
        gerbera.style.left = x + 'px';

        // Add gerbera to the garden
        garden.appendChild(gerbera);
    }

    // Create multiple gerberas
    const numberOfGerberas = 10; // You can adjust this number
    for (let i = 0; i < numberOfGerberas; i++) {
        createGerbera();
    }
});
