//This changes the color of the h1 on hover

var heading = document.getElementsByTagName('h1')[0];

heading.addEventListener('mouseenter', function (event) {
    event.target.style.color = 'teal';
});

heading.addEventListener('mouseout', function (event) {
    event.target.style.color = 'white';
});

//This changes the color of the submit button on click

document.getElementsByTagName('input')[2].addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'teal';
});
