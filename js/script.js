const grid = document.getElementById("grid");
let points = 0;

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createGrid(xCellsNum, yCellsNum) {
  const cellsNum = xCellsNum * yCellsNum;
  grid.style.width = `calc(var(--cell-size) * ${xCellsNum})`;
  let bombs = [];

  // Bombs generator
  for (let i = 1; i <= 16; i++) {
    bombs.push(getRandomNum(1, cellsNum));
  }

  // Grid creation
  for (let i = 1; i <= cellsNum; i++) {

    // Cells in Grid creation
    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.innerHTML = `<span>${i}</span>`;

    // On click event
    cell.addEventListener("click", function () {

      // Check if there's a bomb or not
      for (let j = 0; j < bombs.length; j++) {
        if (this.innerHTML === `<span>${bombs[j]}</span>`) {
          // Make the cell red
          this.classList.add("bg-danger")
        } else {
          // Make the cell lightblue
          this.classList.add("bg-info")
          points += 100;
        }
      }
    });

    grid.append(cell);
  }

  
}

createGrid(10, 10);