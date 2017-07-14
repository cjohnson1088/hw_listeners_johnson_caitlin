//This listens for mouse enters & mouse outs to change the color of the h1

var heading = document.getElementsByTagName('h1')[0];

heading.addEventListener('mouseenter', function (event) {
    event.target.style.color = 'teal';
});

heading.addEventListener('mouseout', function (event) {
    event.target.style.color = 'white';
});

//This listens for a click on submit button & changes the color

document.getElementsByTagName('input')[2].addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'teal';
});

//This listens for a click on an input field & focuses on it by changing color

document.getElementsByTagName('input')[0].addEventListener('focus', function (event) {
    event.target.style.backgroundColor = '#befbff';
});

document.getElementsByTagName('input')[1].addEventListener('focus', function (event) {
    event.target.style.backgroundColor = '#befbff';
});
