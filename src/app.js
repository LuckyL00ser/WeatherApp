import  getTemperature  from './weather';
import createDocumentNodeForCity from './visualChanges';
import { getCitiesFromLocalStorage, addCityToList } from './manageStorage';
import { enableButtons} from './visualChanges';

document.getElementById('add').addEventListener('click', () => {
        addCityToList(document.getElementById('city-input').value);
        document.getElementById('city-input').value = '';
        enableButtons();
}, false);


getCitiesFromLocalStorage().forEach((city) => {
     getTemperature(city)
        .then(response => {
                createDocumentNodeForCity(city,JSON.parse(response.data.main.temp));
                enableButtons();
        }).catch(error => {
                console.log('error' + error);
                alert("Błąd - " + error);
                enableButtons();
                
        });
});




