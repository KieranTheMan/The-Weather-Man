const wDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const wMonth = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const iconValue = {
        CLEARDAY: 'clear-day',
        CLEARNIGHT: 'clear-night',
        RAIN: 'rain',
        SNOW: 'snow',
        SLEET: 'sleet',
        WIND: 'wind',
        FOG: 'fog',
        CLOUDY: 'cloudy',
        PARTLY_CLOUDY_DAY: 'partly-cloudy-day',
        PARTLY_CLOUDY_NIGHT: 'partly-cloudy-night'
    }

const apiKey = '415a6a77c9c19927d59b36e19cdd96fa';

function fetchWeatherReport(apiKey, latitude, longitude) {

    //to avoid cors issue
    let DsProxyLink = 'https://cors-anywhere.herokuapp.com/';
    let DsApiLink = `${DsProxyLink}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?exclude=minutely,alerts,flags`;

    
}
