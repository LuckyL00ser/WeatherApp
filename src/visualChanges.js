import { removeCityFromList }  from './manageStorage';
export default function createDocumentNodeForCity(city, temperature) {


    let li = document.createElement('li');
    var div = document.createElement('div');
    var pName = document.createElement('p');
    var pTemp = document.createElement('p');
    var button = document.createElement('button');

    li.classList.add('d-flex', 'justify-content-between', 'border-bottom');
    div.classList.add('form-inline','w-100');
    pName.classList.add('p','col', 'm-0','p-2');
    pTemp.classList.add('p','col','m-0','p-2');
    button.classList.add('btn', 'btn-outline-danger', 'm-1', 'delete-city');

    var deleteCity = city;

    button.addEventListener('click', () => {
        console.log('deleting city: ' + deleteCity);
        removeCityFromList(deleteCity);
        li.parentElement.removeChild(li);
    })

    pName.innerHTML = city;
    pTemp.innerHTML = temperature + '°C' ;
    button.innerHTML = 'Usuń';
    div.appendChild(pName);
    div.appendChild(pTemp);
    li.appendChild(div);
    li.appendChild(button);
    document.getElementById('list').appendChild(li);


}
export function disableButtons() {
    let buttons = document.getElementsByClassName('delete-city');
    if (buttons === null)
        buttons = [];
    for (var i = 0; i < buttons.length; i++)
        buttons[i].setAttribute('disabled',true);
   // buttons.forEach( (button) => { button.setAttribute('disabled') });
}
export function enableButtons() {
    let buttons = document.getElementsByClassName('delete-city');
    if (buttons === null)
        buttons = [];
    for (var i = 0; i < buttons.length; i++)
        buttons[i].removeAttribute('disabled');
   // buttons.forEach( (button) => { button.removeAttribute('disabled') });
}