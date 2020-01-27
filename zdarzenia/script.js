// var btn = document.querySelector('#btn');
//
// function onBtnClick()
// {
//   //pokazuje właściwości zdarzenia
//   console.log(event);
//
//   alert('Przycisk działa!');
//
//   btn.style.backgroundColor = 'red';
//
//   btn.removeEventListener('click', onBtnClick);
// }
//
// btn.addEventListener('click', onBtnClick);

  // formularz i link

var sentform = document.querySelector('#sentform');
var btn = document.querySelector('#btn');

function onsentform(event)
{
  event.preventDefault();
}

btn.addEventListener('click',onsentform );

// event.preventDefault();
