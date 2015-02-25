//Declare variables
var docTitle = document.title;
var altDocTitle = "Øyvind Nordbø";


//Modification functions
window.onblur = function () {
  document.title = altDocTitle;
};

window.onfocus = function () {
  document.title = docTitle;
};