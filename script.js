/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/


var myList="my-list";
var fullItemList = document.getElementById(myList);



if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem, false );
}
function checkOffItem(clicked) {
if (clicked.target.tagName == "LI") {
clicked.target.classList.toggle("all-done");
    }
}


