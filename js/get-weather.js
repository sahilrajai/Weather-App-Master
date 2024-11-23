const API_KEY = "0a78ce84b98a207d426e63b6031973bf";
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

const http = new slHTTP();

// http://api.openweathermap.org/data/2.5/forecast?units=metric&q=ulhasnagar&appid=0a78ce84b98a207d426e63b6031973bf

async function getCurrentLocationWeather(lat, lon) {
    let queryString = `?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    document.getElementById('before-form').style.display='block';
    document.getElementById('spinner').style.display='inline-block';
    const URL = BASE_URL + queryString;
    const data = await http.get(URL);
    return data;
}


async function getWeather(cityName) {
    let queryString = `?units=metric&q=${cityName}&appid=${API_KEY}`;
    const URL = BASE_URL + queryString;
    document.getElementById('before-form').style.display='block';
    document.getElementById('spinner').style.display='inline-block';
    const data = await http.get(URL);
    return data;
}
// getWeather("Mumbai");