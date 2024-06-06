const Search = async () => {
    const cityName = city.value.trim();
    console.log(cityName);

    if (cityName) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5fe36b192ffd1c36dffb6752bc1722b2&units=metric`);
            const data = await response.json();
            console.log(data);

            // Extracting the required data
            const city = data.name;
            const description = data.weather[0].description;
            const country = data.sys.country;
            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const wind = data.wind.speed;

            // Determine image path based on weather description
            let imagePath = '';
            if (description.includes('rain')) {
                imagePath = './Images/Rain.svg';
            } else if (description.includes('thunderstorm')) {
                imagePath = './Images/thunder.png';
            } else if (description.includes('cloud')) {
                imagePath = './Images/Clouds.svg';
            } else if (description.includes('mist')) {
                imagePath = './Images/Mist.svg';
            } else if (description.includes('haze')) {
                imagePath = './Images/Haze.svg';
            } else {
                imagePath = './Images/Sunny.svg'; // default image
            }

            // Update the main view
            view.innerHTML = `
                <div class="row m-5">
                    <div class="col-2"></div>
                    <div id="main-div" class="col-8">
                        <div class="row1 d-flex">
                            <div class="col-6">
                                <div class="frow">
                                    <p>${temperature}°C<br> ${description} <br> 27-05-2024</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <img id="image1" src="${imagePath}" alt="Weather Image" width="100%">
                            </div>
                        </div>
                        <div class="row2 d-flex justify-content-center m-5">
                            <div id="country" class="weather-detail col-2">
                                <div>
                                    <i class="fa-solid fa-globe fa-fade fs-5"></i>
                                </div>
                                <p>Country</p>
                                <p>${country}</p>
                            </div>
                            <div id="Humidity" class="weather-detail col-2 ms-3">
                                <div>
                                    <i class="fa-solid fa-droplet fa-beat-fade fs-5"></i>
                                </div>
                                <p>Humidity</p>
                                <p>${humidity}%</p>
                            </div>
                            <div id="Wind" class="weather-detail col-2 ms-3">
                                <div>
                                    <i class="fa-solid fa-wind fa-fade fs-5"></i>
                                </div>
                                <p>Wind</p>
                                <p>${wind} km/h</p>
                            </div>
                            <div id="Pressure" class="weather-detail col-2 ms-3">
                                <div>
                                    <i class="fa-solid fa-fire fa-fade fs-4"></i>
                                </div>
                                <p>Pressure</p>
                                <p>${pressure} hPa</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            `;
        } catch (error) {
            console.error("Error fetching the weather data:", error);
        }
    } else {
        alert('Enter a valid city name');
    }
};

function reset() {
    city.value = "";
}
