/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


/*Step 1: Add an action to the button*/
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
  
  //still need to go through this
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteButton";
  span.appendChild(txt);
  newListElement.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


