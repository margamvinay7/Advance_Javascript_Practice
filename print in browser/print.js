// const btn = document.getElementById("print");
// btn.addEventListener("click", () => {
//   window.print();
// });

// canvasElement = document.getElementById("canvas");

// let isToggling = false;

// function enableToggle(e) {
//   isToggling = true;
//   e.preventDefault();
// }

// function disableToggle() {
//   isToggling = false;
// }

// function toggle(e) {
//   if (isToggling === false) {
//     return;
//   }

//   console.log("toggle:", e.target);

//   e.target.classList.add("red");
// }

// for (let i = 1; i <= 256; i++) {
//   let squareDiv = document.createElement("div");
//   canvasElement.appendChild(squareDiv);
//   canvasElement.setAttribute("draggable", "false");

//   squareDiv.onmousedown = enableToggle;
//   squareDiv.onmouseenter = toggle;
//   squareDiv.onmouseup = disableToggle;
// }

function dragstart(event) {
  event.preventDefault();
}

let grid = document.getElementById("grid");

function addSquare() {
  let sliderValue = document.getElementById("slider").value;
  for (let i = 0; i < sliderValue ** 2; i++) {
    const square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
  }
}

function modifyGridProperty() {
  let square = [...document.getElementsByClassName("square")];
  square.forEach((element) => {
    element.setAttribute("ondragstart", "dragstart(event)");
  });
}
