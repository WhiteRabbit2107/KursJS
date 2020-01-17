//VARiable - zmienne
var pojemnik = 'Witaj w Kursie JS ';
var pojemnik2 = 20.334;
var wiek = 30;

// Alert to wyskakujące okno w przeglądarce
// alert(pojemnik);
// window.alert('Masz '+wiek+ ' lat');

// Pokazywanie na konsoli
console.log(pojemnik);

//Tablica zmiennych
var osoby = ['Jan Kowalski', 'Zbigniew S.', 'Aldona Nowak'];

//Dodanie elementu na końcu tablicy
osoby.push('Dariusz Flak');

//Dodanie elementu na początku tablicy
osoby.unshift('Na poczatku');

//Józef na miejscu 9 w tabeli
osoby[9] = 'Józef';

//Usunięcie z końca tabeli
osoby.pop();

//Usunięcie pierwszej zmiennej z tablicy
osoby.shift();

// Wypisanie w konsoli tylko wybranych zmiennych z tablicy.
console.log(osoby.slice(1,2));

//Wypisanie tablicy zmiennych w konsoli
console.log(osoby);

// Długość tablicy
console.log(osoby.length);

//Łączy tablice a wartość jest przerywnikiem
console.log(osoby.join(' - '));

//Odwróć kolejność tablicy
console.log(osoby.reverse());
