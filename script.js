//Inicializamos las variables a usar
const container = document.querySelector("div");
/*
createGrid (size)
size = Tamaño del grid size x size
Itera desde 0 hasta el tamaño o size, por cada iteracion, 
crea una column con la clase column
despues iteramos con otro for para crear 16 grids por cada columna
con la clase grid.
Las añadimos  al column padre y el column la añadimos al container padre
*/
function createGrid(size) {
  size = size;
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    for (let j = 0; j < size; j++) {
      let div = document.createElement("div");
      div.classList.add("grid");
      column.appendChild(div);
    }
  }
}
//Iniciamos con un tamaño de 16x16
createGrid(16);
