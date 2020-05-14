/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* GOAL: Click on a list item to mark it checked */

var fullItemList = document.getElementById("my-list");
fullItemList.addEventListener("click", checkOffItem, false);

function checkOffItem(clicked) {
  //find out which element triggered a specified event
  if (clicked.target.tagName == "LI") {
    //apply the CSS rule set outlined in .all-done if condition is met
    clicked.target.classList.toggle("all-done");
  }
}

/************************************************/
/****************** TRY A LOOP ******************/
/************************************************/

/* Add code to practice loops here */



/************************************************/
/************* CREATE DELETE BUTTON *************/
/************************************************/

/* GOAL: Create a delete button [x] and append (or attach) it to each list item */

var actionListItem = document.getElementsByClassName("action-li");

for (var i = 0; i < 3; i++) {
  var newSpan = document.createElement("span");
  var x = document.createTextNode("X");
  newSpan.appendChild(x);
  actionListItem[i].appendChild(newSpan);
  
  newSpan.className = "deleteButton";
}

/************************************************/
/*************** ADD INTERACTION ****************/
/************************************************/

/* GOAL: Click on a close button to hide the current list item */

var deleteBtn = document.getElementsByClassName("deleteButton");

for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", closeListItem);
}


function closeListItem() {
  var div = this.parentElement;
  div.style.display = "none";
}



