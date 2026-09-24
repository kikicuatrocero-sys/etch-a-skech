//Inicializamos las variables a usar
const container = document.querySelector("div");
const resetButton = document.querySelector("button");

/*
Funcion reset
Pedimos por prompt un valor
Comprobamos que no cancele (cuando cancela, el prompt devuelve null)
Despues convertirmos a Number, el size tiene que ser entero
Cuando escribimos un string, el Number() devuelve NaN y no un integer
entonces comprobramos que no sea NaN para salir del bucle
Con container, su innerHTML (hasta el contenido como de texto ademas del contenido de sus hijos)
los convertimos en null o string vacio eliminando a sus hijos
llamamos despues a la funcion de crear el grid pasandole el parametro en integer de size
 */
function reset() {
  let size;
  do {
    size = prompt("Escribe el tamaño");
    if (size === null) return null;
    size = Number(size);
  } while (isNaN(size));
  container.innerHTML = "";
  createGrid(size);
}
resetButton.addEventListener("click", reset);

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
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
      });
    }
  }
}
//Iniciamos con un tamaño de 16x16
createGrid(16);
