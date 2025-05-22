const container = document.getElementById('container');


for (let i = 0; i < 16 * 16; i++) {
  const squareDiv = document.createElement('div');
  squareDiv.classList.add('grid-square'); 
 
  squareDiv.addEventListener('mouseover', () => {
    squareDiv.style.backgroundColor = 'black'; 
  });

  container.appendChild(squareDiv);
}