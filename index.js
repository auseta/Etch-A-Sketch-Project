const d = document;

const eliminateGridItems = () => { // Metodo para limpiar la grilla
  gridContainer.innerHTML = "";
}

const eliminateGridClass = (classToEliminate,) => { // Metodo para eliminar las clases que determinan las filas y columnas de la grilla
  gridContainer.classList.remove(classToEliminate);
}


const createGridItem = () => { // Metodos para crear elementos de grilla 
  const gridItem = d.createElement("div");
  gridItem.classList.toggle("grid-child");
  gridItem.style.border = "1px solid black";
  // gridItemEvents(gridItem);
  return gridItem;
}

const printGridItem = () => { //  Metodo para agregar un elemento a la grilla
  gridContainer.appendChild(createGridItem())
}

// this function evaluates which color picker button was pressed and stores the color in the colorStorage variable and returns it by modifying the background color of an element.
// function colorActivated(e) {
//   if (rainbowColorActivated) {
//     let colorR = Math.floor(Math.random() * 256).toString();
//     let colorG = Math.floor(Math.random() * 256).toString();
//     let colorB = Math.floor(Math.random() * 256).toString();
//     colorStorage = `rgb(${colorR}, ${colorG}, ${colorB})`;
//     return e.currentTarget.style.backgroundColor = colorStorage;   
//   } else if (colorSelectorActivated) {
//       colorStorage = colorSelectorInput.value;
//       return e.currentTarget.style.backgroundColor = colorStorage;
//   } else if (eraserButtonActivated) {
//       colorStorage = "transparent";
//       return e.currentTarget.style.backgroundColor = colorStorage;
//   } else if (brownsColorsActivated) {
//     switch (Math.floor(Math.random() * 5) + 1) {
//       case 1:
//         colorStorage = "chocolate";
//         break;
//       case 2:
//         colorStorage = "brown";
//         break;
//       case 3:
//         colorStorage = "khaki";
//         break;
//       case 4:
//         colorStorage = "sienna";
//         break;
//       case 5:
//         colorStorage = "tan";
//         break;
//     }
//     return e.currentTarget.style.backgroundColor = colorStorage;
//   }
// }

// when the mouse button is pressed, an element of the grid is painted and the buttonPressed variable is equal to true
// function startPrint(e) {
//   e.preventDefault()
//   mousePressed = true;
//   colorActivated(e)
// }

// evaluates if the buttonPressed variable is true, if it is when entering the next element it will paint it with the selected color

// function printOnMove (e) {
//   e.preventDefault()
//   if (mousePressed) {
//     colorActivated(e)
//   }
// }

// if the mouse button is released mousePressed will be equal to false and when the mouse moves to the next element it will not be painted
// function stopPrint() {
//   mousePressed = false;
// }


const gridContainer = d.querySelector(".grid-container");

const buttonGrid16x16 = d.querySelector("#grid-16");

const buttonGrid32x32 = d.querySelector("#grid-32");

const buttonGrid64x64 = d.querySelector("#grid-64");

const colorSelectorInput = d.querySelector("#color-selector");

const eraserButton = d.querySelector("#eraser");

const rainbowButton = d.querySelector("#rainbow-button");

const brownsButton = d.querySelector("#browns-button");

//these variables contain boolean values ​​- false: disabled || true: activated
let rainbowColorActivated = false;
let colorSelectorActivated = false;
let eraserButtonActivated = false;
let brownsColorsActivated = false;

// this variable will take care of listening if the mouse button is held down or not
let mousePressed = false;

// the selected color will be stored here
let colorStorage;

// here is the creation of the grid by default (16x16)

// const gridItemEvents = (gridItem) => {
//   gridItem.onmousedown = startPrint;
//   gridItem.onmouseenter = printOnMove;
//   gridItem.onmouseup = stopPrint;
// }

// TODO: mejorando el proyecto

//* Metodo para cambiar la visualizacion de la grilla

const clearGrid = (classToAdd, classToDelete_1, classToDelete_2, classToDelete_1_length, classToDelete_2_length) => {

  let doesClassToDelete_1Exist = gridContainer.classList.contains(classToDelete_1);

  let doesClassToDelete_2Exist = gridContainer.classList.contains(classToDelete_2);

  let doesClassToAddExist = gridContainer.classList.contains(classToAdd);

  if (doesClassToDelete_1Exist && !doesClassToAddExist) {
    eliminateGridClass(classToDelete_1);

    eliminateGridItems(classToDelete_1_length);
  
    gridContainer.classList.add(classToAdd);
  }
  
  if (doesClassToDelete_2Exist && !doesClassToAddExist) {

    eliminateGridClass(classToDelete_2);

    eliminateGridItems();
  
    gridContainer.classList.add(classToAdd);

  }

}

// Metodo para mostrar una grilla de 16x16

const displayGrid16x16 = () => {
  
  clearGrid('option-16', 'option-32', 'option-64');    
    
    for (let i = 0; i < 256; i++) {
    
      printGridItem();
    
    };

}

// Metodo para mostrar una grilla de 32x32

const displayGrid32x32 = () => {
  clearGrid('option-32', 'option-16', 'option-64');
  for (let i = 0; i < 1024; i++) {
    printGridItem();
  }
}

// Metodo para mostrar una grilla de 64x64

const displayGrid64x64 = () => {
  clearGrid('option-64', 'option-16', 'option-32');
  for (let i = 0; i < 4096; i++ ) {
    printGridItem();
  }
}

// Cargando la vista de la grilla

d.addEventListener('DOMContentLoaded', displayGrid16x16());

// these buttons are responsible for changing the size of the grid
buttonGrid16x16.addEventListener("click", displayGrid16x16);

buttonGrid32x32.addEventListener("click", displayGrid32x32);

buttonGrid64x64.addEventListener("click", displayGrid64x64);

// these addEvenListeners take care of toggling the button's on/off state and allowing only one to be activated for use
// colorSelectorInput.addEventListener("click", () => {
//   colorSelectorActivated = true;
//   rainbowColorActivated = false;
//   eraserButtonActivated = false;
//   brownsColorsActivated = false
// });

// rainbowButton.addEventListener("click", () => {
//   rainbowColorActivated = true;
//   colorSelectorActivated = false;
//   eraserButtonActivated = false;
//   brownsColorsActivated = false;
// });

// eraserButton.addEventListener("click", () => {
//   eraserButtonActivated = true;
//   colorSelectorActivated = false;
//   rainbowColorActivated = false;
//   brownsColorsActivated = false;
// });

// brownsButton.addEventListener("click", () => {
//   brownsColorsActivated = true;
//   rainbowColorActivated = false;
//   colorSelectorActivated = false;
//   eraserButtonActivated = false;
// });
