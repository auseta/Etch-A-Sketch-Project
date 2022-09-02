function gridModifier(class1, class2, class3, squares) {
  if (gridContainer.classList.contains(class2)) {
    gridContainer.classList.toggle(class2);
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.classList.toggle(class1);
    for (let i = 1; i <= squares; i++) {
      const gridItem = document.createElement("div");
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
      gridItem.style.border = "1px solid black";
      gridContainer.appendChild(gridItem);
    }
  }
}

function option16() {
  gridModifier("option-16", "option-32", "option-64", 256)
}

function option32() {
  gridModifier("option-32", "option-16", "option-64", 1024)
}

function option64() {
  gridModifier("option-64", "option-16", "option-32", 4096)
}

const gridContainer = document.querySelector(".grid-container");
const button16 = document.querySelector("#grid-16");
const button32 = document.querySelector("#grid-32");
const button64 = document.querySelector("#grid-64");
const colorSelector = document.querySelector("#color-selector");

// here the selected colors will be stored
let colorPicker;



for (let i = 1; i <= 256; i++) {
  const gridItem = document.createElement("div");
  gridItem.style.border = "1px solid black";
  gridContainer.appendChild(gridItem);
}

button16.addEventListener("click", option16);
button32.addEventListener("click", option32)
button64.addEventListener("click", option64);


colorSelector.addEventListener("input", ()=> {
  colorPicker = colorSelector.value;
  console.log("colorPicker: " + colorPicker);
})