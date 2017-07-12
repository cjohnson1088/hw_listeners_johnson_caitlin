var number = 0;

var heading1 = document.getElementsByTagName('h1')[0];

heading1.addEventListener('click', myFunction);

function myFunction() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'This is click number: ' + ++number;
    document.body.appendChild(paragraph);
}
