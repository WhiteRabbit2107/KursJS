// for (zmienne; warunek; zwiększanie zmiennych)

var pracownicy = ['Marek', 'Jan', 'Artur', 'Marcin', 'Łukasz'];

console.log(pracownicy.length);

for (var i=0, len = pracownicy.length; i < len; i++)
{
  // console.log(i);
  // console.log(pracownicy[i]);
}

pracownicy.forEach(function(element, index, array)
{
  // console.log(element);
});

var indeks = 0;
var iluPracownikow = pracownicy.length;

while (iluPracownikow) {
  console.log(pracownicy[indeks] + ' dostał zadanie. ');
  indeks++;
  iluPracownikow--;
}

// zadziała przynajmniej raz 
do
{
  // KOD //
} while ();
