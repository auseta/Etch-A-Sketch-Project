const d = document;

const colorBoxColorSelected = () => {

  colorSelectorInput.addEventListener("input", (e) => colorStorage = e.target.value);

}

const randomColorGenerator = () => {

  if (rainbowColorActivated) {

    let colorR = Math.floor(Math.random() * 256).toString();

    let colorG = Math.floor(Math.random() * 256).toString();

    let colorB = Math.floor(Math.random() * 256).toString();

    colorStorage = `rgb(${colorR},${colorG},${colorB})`;

  }

}

const brownColors = () => {

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
}

const eraseColor = () => {

  colorStorage = "transparent"

}


const eliminateGridItems = () => { 

  gridContainer.innerHTML = "";
  
}

const eliminateGridClass = (classToEliminate,) => {
  gridContainer.classList.remove(classToEliminate);
}

const gridItemEvents = (gridItem) => {

  gridItem.addEventListener("mousedown", (e) => {

    e.preventDefault()

    mousePressed = true;

    e.target.style.backgroundColor = colorStorage;

  })

  gridItem.addEventListener("mouseenter", (e) => {

    e.preventDefault();

    if (mousePressed) {

      if (rainbowColorActivated) {

        randomColorGenerator();

        e.target.style.backgroundColor = colorStorage;

      }

      if (eraserButtonActivated) {

        e.target.style.backgroundColor = colorStorage;

      }

      if (colorSelectorActivated) {

        e.target.style.backgroundColor = colorStorage;

      }

      if (brownsColorsActivated) {

        brownColors();

        e.target.style.backgroundColor = colorStorage;

      }

    }

  });

  gridItem.addEventListener("mouseup", (e) => {

    e.preventDefault();

    mousePressed = false;

  });

}

const createGridItem = () => {  

  const gridItem = d.createElement("div");

  gridItem.classList.toggle("grid-child");

  gridItem.style.border = "1px solid black";

  gridItemEvents(gridItem);

  return gridItem;
}

const printGridItem = () => { 

  gridContainer.appendChild(createGridItem())

}

const clearGrid = (classToAdd, classToDelete_1, classToDelete_2, classToDelete_1_length, classToDelete_2_length) => {

  gridContainer.innerHTML = "";

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

    eliminateGridItems(classToDelete_2_length);

    gridContainer.classList.add(classToAdd);

  }

}

const displayGrid16x16 = () => { 

  clearGrid('option-16', 'option-32', 'option-64');

  for (let i = 0; i < 256; i++) {

    printGridItem();

  };

}

const displayGrid32x32 = () => { 
  
  clearGrid('option-32', 'option-16', 'option-64');
  
  for (let i = 0; i < 1024; i++) {
    
    printGridItem();
  
  }
}

const displayGrid64x64 = () => { 
  
  clearGrid('option-64', 'option-16', 'option-32');
  
  for (let i = 0; i < 4096; i++) {
    
    printGridItem();
  
  }
}

const gridContainer = d.querySelector(".grid-container");

const buttonGrid16x16 = d.querySelector("#grid-16");

const buttonGrid32x32 = d.querySelector("#grid-32");

const buttonGrid64x64 = d.querySelector("#grid-64");

const colorSelectorInput = d.querySelector("#color-selector");

const eraserButton = d.querySelector("#eraser");

const rainbowButton = d.querySelector("#rainbow-button");

const brownsButton = d.querySelector("#browns-button");

let rainbowColorActivated = false;

let colorSelectorActivated = false;

let eraserButtonActivated = false;

let brownsColorsActivated = false;

let colorStorage; 

let mousePressed = false; 

gridContainer.addEventListener("mouseleave", (e) => {

  e.preventDefault();

  mousePressed = false;

})

d.addEventListener('DOMContentLoaded', displayGrid16x16());

buttonGrid16x16.onclick = displayGrid16x16;

buttonGrid32x32.onclick = displayGrid32x32;

buttonGrid64x64.onclick = displayGrid64x64;

rainbowButton.addEventListener("click", () => {

  rainbowColorActivated = true;

  colorSelectorActivated = false;

  brownsColorsActivated = false;

  eraserButtonActivated = false;

  randomColorGenerator();

});

eraserButton.addEventListener("click", () => {

  rainbowColorActivated = false;

  colorSelectorActivated = false;

  brownsColorsActivated = false;

  eraserButtonActivated = true;

  eraseColor();

})

colorSelectorInput.addEventListener("click", () => {

  rainbowColorActivated = false;

  colorSelectorActivated = true;

  brownsColorsActivated = false;

  eraserButtonActivated = false;

  colorBoxColorSelected();

})

brownsButton.addEventListener("click", () => {

  rainbowColorActivated = false;

  colorSelectorActivated = false;

  brownsColorsActivated = true;

  eraserButtonActivated = false;

  brownColors();

})