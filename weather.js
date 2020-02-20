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

function fetchWeatherReport(latitude, longitude) {
    const apiKey = '415a6a77c9c19927d59b36e19cdd96fa';
    //to avoid cors issue
    let DsProxyLink = 'https://cors-anywhere.herokuapp.com/';
    let DsApiLink = `${DsProxyLink}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?exclude=minutely,alerts,flags`;

    fetch(DsApiLink)
        .then(response => {
            return response.json()
        })
        .then(data => {
            //JSON data
            let resultsHTML = "";
            let tableHTML = "";
            let summary = data.currently.summary;
            let temperature = data.currently.temperature;
            let icon = data.currently.icon;
            let precipProbability = data.currently.precipProbability;
            let humidity = data.currently.humidity;
            let windSpeed = data.currently.windSpeed
            let ts = new Date(data.currently.time * 1000);
            let forecastDate = `${wDay[ts.getDay()]} ${wMonth[ts.getMonth()]} ${ts.getDate()}`

            //set up values for current conditions
            document.getElementById('dayTime').innerHTML = forcastDate;
            document.getElementById('summary').innerHTML = summary;
            document.getElementById('currentTemp').innerHTML = Math.round(temperature)&deg;
            document.getElementById('weatherIcon').src = getICON(icon);
            document.getElementById('perciptation').innerHTML = `Perciptation ${precipProbability*100}%`
            document.getElementById('humidity').innerHTML = `Humidity ${Math.round(humidity*100)}%`;
            document.getElementById('wind').innerHTML = `Winds ${Math.round(windSpeed)} mph`;

            //forcasts tabs
            document.getElementById('dailyForecast').innerHTML = renderWeeklyForecast(data.daily);
            documnet.getElementById('weeklyForecast').innerHTML = renderDailyForecast(data.hourly);
        })
        .catch(err => {
            throw('Sorry, An Error occured. ${err}')
        });
}

function fetchLoaction(latitude, longitude) {
    const apiGKey = '';
    let googleApiLink = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiGKey}`;

    fetch(googleApiLink)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.getElementById('location').innerHTML = data.results[4].formatted_address;
        })
        .catch(err => {
            throw(`Sorry, An Error occured`)
        })
}