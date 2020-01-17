var osoby = ['Jan Kowalski', 'Zbigniew S.', 'Aldona Nowak'];

console.log(osoby);

//Klasa człowiek
var czlowiek = {
  wzrost: 178,
  waga: 80,
  wiek: 30,
  oczy: 'niebieskie',

  umyjZeby: function() {
    console.log('Myje zeby')
  },

  jedzSamochodem: function() {
    console.log('Jade autem')
  },
}

//Wywołanie obiektu
console.log(czlowiek);

console.log(czlowiek.umyjZeby());

//Zmiana zmiennej
czlowiek.wzrost = 170;

console.log(czlowiek.wzrost);
