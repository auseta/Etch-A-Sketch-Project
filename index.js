// This function is responsible for verifying the conditions in which one grid size or another will be activated.
function gridModifier(class1, class2, class3, squares) {
  if (gridContainer.classList.contains(class2)) {
    gridContainer.classList.toggle(class2);
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.classList.toggle(class1);
    for (let i = 1; i <= squares; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-child");
      gridItem.style.border = "1px solid black";
      gridContainer.appendChild(gridItem);
    }
  } else if (gridContainer.classList.contains(class3)) {
    gridContainer.classList.toggle(class3);
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.classList.toggle(class1);
    for (let i = 1; i <= squares; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-child");
      gridItem.style.border = "1px solid black";
      gridContainer.appendChild(gridItem);
    }
  }
}

// This function is responsible for changing the size (16x16) of the grid and giving it the interaction of drawing on it.
function option16() {
  gridModifier("option-16", "option-32", "option-64", 256);
  const gridChilds = document.querySelectorAll(".grid-child");
  gridChilds.forEach((child) => {
    child.onmousedown = startPrint;
    child.onmouseenter = printOnMove;
    child.onmouseup = stopPrint;
  });
}

//This function is responsible for changing the size (32x32) of the grid and giving it the interaction of drawing on it.
function option32() {
  gridModifier("option-32", "option-16", "option-64", 1024);
  const gridChilds = document.querySelectorAll(".grid-child");
  gridChilds.forEach((child) => {
    child.onmousedown = startPrint;
    child.onmouseenter = printOnMove;
    child.onmouseup = stopPrint;
  });
}

//This function is responsible for changing the size (64x64) of the grid and giving it the interaction of drawing on it.
function option64() {
  gridModifier("option-64", "option-16", "option-32", 4096);
  const gridChilds = document.querySelectorAll(".grid-child");
  gridChilds.forEach((child) => {
    child.onmousedown = startPrint;
    child.onmouseenter = printOnMove;
    child.onmouseup = stopPrint;
  });
}


// this function evaluates which color picker button was pressed and stores the color in the colorStorage variable and returns it by modifying the background color of an element.
function colorActivated(e) {
  if (rainbowColorActivated) {
    let colorR = Math.floor(Math.random() * 256).toString();
    let colorG = Math.floor(Math.random() * 256).toString();
    let colorB = Math.floor(Math.random() * 256).toString();
    colorStorage = `rgb(${colorR}, ${colorG}, ${colorB})`;
    return e.currentTarget.style.backgroundColor = colorStorage;   
  } else if (colorSelectorActivated) {
      colorStorage = colorSelectorInput.value;
      return e.currentTarget.style.backgroundColor = colorStorage;
  } else if (eraserButtonActivated) {
      colorStorage = "transparent";
      return e.currentTarget.style.backgroundColor = colorStorage;
  } else if (brownsColorsActivated) {
    switch (Math.floor(Math.random() * 5) + 1) {
      case 1:
        colorStorage = "chocolate";
        break;
      case 2:
        colorStorage = "brown";
        break;
      case 3:
        colorStorage = "khaki";
        break;
      case 4:
        colorStorage = "sienna";
        break;
      case 5:
        colorStorage = "tan";
        break;
    }
    return e.currentTarget.style.backgroundColor = colorStorage;
  }
}

// when the mouse button is pressed, an element of the grid is painted and the buttonPressed variable is equal to true
function startPrint(e) {
  e.preventDefault()
  mousePressed = true;
  colorActivated(e)
}

// evaluates if the buttonPressed variable is true, if it is when entering the next element it will paint it with the selected color

function printOnMove (e) {
  e.preventDefault()
  if (mousePressed) {
    colorActivated(e)
  }
}

// if the mouse button is released mousePressed will be equal to false and when the mouse moves to the next element it will not be painted
function stopPrint() {
  mousePressed = false;
}


const gridContainer = document.querySelector(".grid-container");
const button16 = document.querySelector("#grid-16");
const button32 = document.querySelector("#grid-32");
const button64 = document.querySelector("#grid-64");
const colorSelectorInput = document.querySelector("#color-selector");
const eraserButton = document.querySelector("#eraser");
const rainbowButton = document.querySelector("#rainbow-button");
const brownsButton = document.querySelector("#browns-button");

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
for (let i = 1; i <= 256; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.toggle("grid-child");
  gridItem.style.border = "1px solid black";
  gridItem.onmousedown = startPrint;
  gridItem.onmouseenter = printOnMove;
  gridItem.onmouseup = stopPrint;
  gridContainer.appendChild(gridItem);
}

// these buttons are responsible for changing the size of the grid
button16.addEventListener("click", option16);
button32.addEventListener("click", option32);
button64.addEventListener("click", option64);

// these addEvenListeners take care of toggling the button's on/off state and allowing only one to be activated for use
colorSelectorInput.addEventListener("click", () => {
  colorSelectorActivated = true;
  rainbowColorActivated = false;
  eraserButtonActivated = false;
  brownsColorsActivated = false
});

rainbowButton.addEventListener("click", () => {
  rainbowColorActivated = true;
  colorSelectorActivated = false;
  eraserButtonActivated = false;
  brownsColorsActivated = false;
});

eraserButton.addEventListener("click", () => {
  eraserButtonActivated = true;
  colorSelectorActivated = false;
  rainbowColorActivated = false;
  brownsColorsActivated = false;
});

brownsButton.addEventListener("click", () => {
  brownsColorsActivated = true;
  rainbowColorActivated = false;
  colorSelectorActivated = false;
  eraserButtonActivated = false;
});
