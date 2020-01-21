var tabela = document.createElement('table');

tabela.classList.add('table');

//Tworzenie wierszy
for (var trCount = 0; trCount < 5; trCount++)
{
  var wiersz = document.createElement('tr');

  //Tworzenie kolumn
  for (var tdCount = 0; tdCount < 10; tdCount++)
  {
    var kolumna = document.createElement('td');

    kolumna.appendChild(document.createTextNode('kolumna'+tdCount));
    // KOlumna --> wiersz
    wiersz.appendChild(kolumna);
  }
  //Wiersz --> tabela
  tabela.appendChild(wiersz);
}
//Tabela = body
document.querySelector('#pojemnik').appendChild(tabela);
//<table>
// <tr>
//   <td></td>
// </tr>
