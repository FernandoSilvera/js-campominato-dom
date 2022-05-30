const grid = document.getElementById("grid");


function createGrid(xCellsNum, yCellsNum) {
  const cellsNum = xCellsNum * yCellsNum;
  grid.style.width = `calc(var(--cell-size) * ${xCellsNum})`;

  // Grid creation
  for (let i = 1; i <= cellsNum; i++) {

    // Cells in Grid creation
    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.innerHTML = `<span>${i}</span>`;

    // On click event
    cell.addEventListener("click", function () {

      // Make the cell lightblue
      this.classList.add("bg-info")
    });

    grid.append(cell);
  }
}

createGrid(10, 10);