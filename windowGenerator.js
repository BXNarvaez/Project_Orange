import items from "./itemList.js";
import * as Window from "./draggableWindow.js"

const homePageWindows = items.map(item => {
    let draggableWindow = Window.InstantiateWindow(item);
    draggableWindow.SetSize();
    return draggableWindow;
})

const body = document.body;

homePageWindows.forEach(draggableWindow => {

    body.appendChild(draggableWindow.div);
})

// Make the DIV elements draggable:
var windows = document.getElementsByClassName("dragWind");
for (var i = 0; i < windows.length; i++) {
   dragElement(windows.item(i));
}
//dragElement(document.getElementsByClassName("dragWind"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.querySelector(".dragWindHeader")) {
    // if present, the header is where you move the DIV from:
    elmnt.querySelector(".dragWindHeader").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    //elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = DropElement;
    // call a function whenever the cursor moves:
    document.onmousemove = DragElement;
  }

  function DragElement(e) {
    e = e || window.event;
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function DropElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}