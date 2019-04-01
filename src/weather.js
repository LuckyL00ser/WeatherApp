import {disableButtons, enableButtons } from './visualChanges'
import axios from 'axios'
const appID = '05f5cd33a78f26982b46071600c01ff6';
export default function getTemperature(city) {

    disableButtons();
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appID}&units=metric`);
        
    
}
