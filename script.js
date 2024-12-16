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

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = '#ff5733';
            });
            grid.appendChild(square);
        }
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