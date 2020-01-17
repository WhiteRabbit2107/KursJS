//wyieranie elementu po ID
console.log(document.getElementById('lista-artykulow'));
//wybieranie elementu po klasie
console.log(document.getElementsByClassName('jumbotron'));
//wybieranie na podstawie TAgu
console.log(document.getElementsByTagName('p'));

// var listaArtykulow = document.getElementById('lista-artykulow');

//query selector wybiera tylko pierwszy element
// var listaArtykulow = document.querySelector('#lista-artykulow article > p');
// > znaczy, ze wybiera bezpośrednio dziecko elementu

// wybiera tylko pierwszy element danego rodziaju, poniżej jak wybrać wszystkie
var listaArtykulow = document.querySelector('#lista-artykulow');

//dodanie klasy
listaArtykulow.classList.add('text-center', 'text-uppercase');

listaArtykulow.classList.remove('text-center');

console.log(listaArtykulow.classList.contains('text-uppercase'));

console.log(listaArtykulow);

//szukanie klas jumbotron wewnątrz listy artykkulów
// listaArtykulow.getElementsByClassName('jumbotron');

var tytul = document.querySelector('#lista-artykulow h1');

// podmiana tekstu
tytul.textContent = 'Przykladowy tekst';

// podmiana HTMLa dla elementu
tytul.innerHTML = '<p><b>Pogrubiony tekst</p></b>';

// jeśli myslnik w css to w js camelCase
tytul.style.color = '#df4531';
tytul.style.marginTop = '102px';
