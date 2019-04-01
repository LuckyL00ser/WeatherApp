import getTemperature from './weather';
import createDocumentNodeForCity from './visualChanges';

export function getCitiesFromLocalStorage() {
    let cities=[];
    if (localStorage.getItem('cities') === null) {
        cities = [];
    } else {
        cities = JSON.parse(localStorage.getItem('cities'))
    }
    return cities;
}

export function saveCitiesToLocalStorage(cities) {

    localStorage.setItem('cities', JSON.stringify(cities));
}
export function removeCityFromList(city) {
    let cities = getCitiesFromLocalStorage();
    for (var i = 0; i < cities.length; i++) {
        if (cities[i] === city) {
            cities.splice(i, 1);
            break;
        }
    }
    saveCitiesToLocalStorage(cities);
}
export function addCityToList(city) {

    let cities = getCitiesFromLocalStorage();
    
    if (!(cities.includes(city))) {
        
        getTemperature(city).then(response => {
           
            createDocumentNodeForCity(city, JSON.parse(response.data.main.temp));
            cities.push(city);
            saveCitiesToLocalStorage(cities);
        }).catch(error => console.log('error' + error));

    } else {
        alert('Miasto już jest na liście');
    }
}
