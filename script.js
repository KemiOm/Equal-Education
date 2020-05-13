/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/************************************************/
/************ STEP 1: ADD CHECKLIST *************/
/**************** FUNCTIONALITY *****************/
/************************************************/

/* GOAL: Click on a list item to mark it checked */

var fullItemList = document.getElementById("my-list");
fullItemList.addEventListener("click", checkOffItem, false);

function checkOffItem(test) {
  if (test.target.tagName == "LI") {
    //find out which element triggered a specified event
    test.target.classList.toggle("all-done");
  }
}

/*
var fullItemList = document.getElementById("my-list");
fullItemList.addEventListener(
  "click",
  function(event) {
    //this is a function expression - it allows us to create a function inside the event listener
    if (event.target.tagName == "LI") {
      //find out which element triggered a specified event
      event.target.classList.toggle("all-done");
    }
  },
  false
);
*/

/*
classlist.toggle()
Toggles between a class name for an element.

The first parameter removes the specified class from an element, and returns false.
If the class does not exist, it is added to the element, and the return value is true.

The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed. For example:

Remove a class: element.classList.toggle("classToRemove", false);
Add a class: element.classList.toggle("classToAdd", true);

*/

/************************************************/
/********* STEP 2: CREATE DELETE BUTTON *********/
/************************************************/

/* GOAL: Create a delete button [x] and append (or attach) it to each list item */

var myNodelist = document.getElementsByClassName("action-li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteButton";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

/************************************************/
/************ STEP 3: ADD AN ACTION *************/
/************** TO DELETE BUTTON ****************/
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

/************************************************/
/************** CODE FOR EXTENSIONS *************/
/************************************************/

//UNCOMMENT TO ADD, COMPLETE, AND DELETE NEW ITEMS
/* Add new items 
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", newActionItem);

function newActionItem() {
  //Create a new "li" element to hold the action item you enter
  var newListElement = document.createElement("li");

  //Create a variable to select and store the value of what is entered into the input box
  //WHAT IS .VALUE?!! Debug alert
  var inputBoxValue = document.getElementById("task-entry-box").value;

  //Add a variable that creates a new text node containing the value of the input box
  var actionItemText = document.createTextNode(inputBoxValue);

  //Append or attach the new list text you entered to the new "li" element you created
  newListElement.appendChild(actionItemText);

  if (inputBoxValue === " ") {
    alert("Please enter your action item");
  } else {
    //Find and select the HTML ul element called my-list and attach the li
    //element containing our action item text to the end of the list
    document.getElementById("my-list").appendChild(newListElement);
  }
  //Pretty sure this will remove the text from the input box
  document.getElementById("task-entry-box").value = "";

  
  //add delete button to each new item - still need to commemnt this
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteButton";
  span.appendChild(txt);
  newListElement.appendChild(span);
  
  //ability to delete all new items
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
*/
