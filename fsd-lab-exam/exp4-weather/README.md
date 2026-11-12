# 4. Weather Dashboard (fetch API)

> Core idea: **fetch → await → .json() → display** (no API key needed)

## ▶ Start

1. Create a folder **Exp4** and open it in VS Code.
2. New File → **weather.html** (⚠️ needs internet)

## 📄 Code: weather.html

```html
<!DOCTYPE html>
<html>
<body>

    <h2>Weather Dashboard</h2>
    <input id="city" placeholder="Enter city">
    <button onclick="getWeather()">Get Weather</button>
    <div id="output"></div>

    <script>
        async function getWeather() {
            let city = document.getElementById("city").value;

            // Step 1: Get latitude and longitude
            let geoUrl = "https://geocoding-api.open-meteo.com/v1/search?name=" + city;
            let geoResponse = await fetch(geoUrl);
            let geoData = await geoResponse.json();

            let lat = geoData.results[0].latitude;
            let lon = geoData.results[0].longitude;

            // Step 2: Get weather
            let weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + lat +
                             "&longitude=" + lon + "&current_weather=true";
            let weatherResponse = await fetch(weatherUrl);
            let weatherData = await weatherResponse.json();

            // Step 3: Display
            document.getElementById("output").innerHTML =
                "<h3>" + city + "</h3>" +
                "Temperature: " + weatherData.current_weather.temperature + " °C <br>" +
                "Wind Speed: " + weatherData.current_weather.windspeed + " km/h";
        }
    </script>

</body>
</html>
```

## 🏁 End

1. **Ctrl + S** → open in Chrome.
2. Type **Hyderabad** → click **Get Weather** → the temperature and wind speed appear.
