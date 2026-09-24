//Inicializamos las variables a usar
const container = document.querySelector("div");
function createGrid(size) {
  size = size * 2;
  console.log(size)
  for (let i = 0; i < size; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
  }
  console.log("Completado");
}
createGrid(16);
