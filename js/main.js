/*var clicker = document.getElementByID('clicker');
var clicks = 0;

document.getElementByID('clicker').addEventListener('click', function () {
    var newElement = document.createElement('paragraph');
    newElement.innerHTML = '<p>This is click number </p>' + clicks++;
});*/

/*var paragraph = document.createElement('p');
paragraph.innerHTML = '<p>This is click number </p>';*/

var clicks = 0;
var newElement = document.createElement('paragraph');
document.getElementByID('clicker').addEventListener('click', function () {
    newElement.innerHTML = '<p>This is click number </p>' + clicks++;
});
