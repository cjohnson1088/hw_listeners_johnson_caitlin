var heading1 = document.getElementsByTagName('h1')[0];

heading1.addEventListener('click', myFunction);

function myFunction() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'This is click number: ';
    heading1.appendChild(paragraph);
}
