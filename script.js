document.addEventListener('DOMContentLoaded', () => {

    // Function to generate the grid
    function generateGrid(size) {
        const grid = document.getElementById('grid');
        grid.innerHTML = ''; // Clear any existing grid
        
        const totalSquares = size * size;
        const squareSize = 400 / size; // Each square's size should fit in a 400px container

        // Create and append squares
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            // Store the initial color and intensity for darkening
            let initialColor = null;
            let colorIntensity = 0; // Start with 0% darkening

            square.addEventListener('mouseover', () => {
                // If the square hasn't been hovered over before, randomize the color
                if (initialColor === null) {
                    initialColor = getRandomColor();
                    square.style.backgroundColor = initialColor;
                } else {
                    // Darken the color progressively by 10% on each hover
                    colorIntensity += 10;
                    if (colorIntensity > 100) colorIntensity = 100; // Cap at 100%
                    square.style.backgroundColor = darkenColor(initialColor, colorIntensity);
                }
            });
            grid.appendChild(square);
        }
    }
    
    // Function to generate a random RGB color
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to darken the color by a percentage
    function darkenColor(color, percentage) {
        const rgb = color.match(/\d+/g).map(Number); // Extract RGB values
        const factor = 1 - (percentage / 100);
        
        // Darken each color channel (R, G, B)
        const r = Math.floor(rgb[0] * factor);
        const g = Math.floor(rgb[1] * factor);
        const b = Math.floor(rgb[2] * factor);
        
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Initialize with the default grid size (16x16)
    generateGrid(16);

    // Event listener for the change grid button
    document.getElementById('change-grid-btn').addEventListener('click', () => {
        const newSize = parseInt(prompt('Enter the number of squares per side (e.g., 16, 32, 64):'));

        // Validate input
        if (isNaN(newSize) || newSize <= 0) {
            alert('Please enter a valid positive number.');
        } else if (newSize > 100) {
            alert('The maximum number of squares per side is 100.');
        } else {
            generateGrid(newSize);
        }
    });
});