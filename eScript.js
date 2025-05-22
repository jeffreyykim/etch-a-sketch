const container = document.getElementById('container');
const button = document.getElementById('reset-button');

function createGrid(size) {
  container.innerHTML = '';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('grid-square');
    squareDiv.style.filter = 'brightness(1)'; // Start with full brightness

    squareDiv.addEventListener('mouseover', () => {
      if (!squareDiv.style.backgroundColor) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        squareDiv.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      }

      const currentBrightness = parseFloat(squareDiv.style.filter.match(/brightness\(([^)]+)\)/)[1]);
      if (currentBrightness > 0) {
        squareDiv.style.filter = `brightness(${currentBrightness - 0.1})`;
      }
    });

    container.appendChild(squareDiv);
  }
}

button.addEventListener('click', () => {
  let size = parseInt(prompt('Enter grid size (max 100):'));
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

createGrid(16);