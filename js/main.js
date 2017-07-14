var heading = document.getElementsByTagName('h1')[0];

heading.addEventListener('mouseenter', function (event) {
    event.target.style.color = 'teal';
});

heading.addEventListener('mouseout', function (event) {
    event.target.style.color = 'white';
});
