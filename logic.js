Search= async()=>{
    const Cityname = city.value
    console.log(Cityname);

    if(Cityname){
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Cityname}&appid=5fe36b192ffd1c36dffb6752bc1722b2&units=metric`)
        response.json().then((data)=>{
            console.log(data);
            //city
    
            let city=data.name
            console.log(city);
    
            //description
            let description=data.weather[0].description
            console.log(description);
    
            //country
            let country=data.sys.country
            console.log(country);
    
            //temperature
    
            let temperature=data.main.temp
            console.log(temperature);
    
            //feels like
    
            let feels=data.main.feels_like
            console.log(feels);
    
            //humidity
    
            let humidity=data.main.humidity
            console.log(humidity);
    
            //pressure
    
            let pressure=data.main.pressure
            console.log(pressure);
    
            //wind speed
            let wind=data.wind.speed
            console.log(wind);

            //image
            // if(description=='Rain'){
            //     image1.innerHTML=`<img id="image1" width="300px" height="300px" class="ms-5" src="./Images/Rain.svg" alt="this is image">`
            
            // }
            // else if(description=='Thunderstorm'){
            //     image1.innerHTML=`<img id="image1 width="300px" height="300px" class="ms-5" src="./Images/thunder.png" alt="this is image">`
            // }
            // else if(description=='overcast clouds'){
            //     image1.innerHTML=`<img id="image1 width="300px" height="300px" class="ms-5" src="./Images/Clouds.svg" alt="this is image">`
            // }
            // else if(description=='mist'){
            //  image1.innerHTML=`<img id="image1 width="300px" height="300px" class="ms-5" src="./Images/Mist.svg" alt="this is image">`
            // }

            // else if(description==' broken clouds'){
            //     image1.innerHTML=`<img id="image1 width="300px" height="300px" class="ms-5" src="./Images/Clouds.svg" alt="this is image">`
            //    }
           

            // else{
            //     image1.innerHTML= `<img id="image1 width="300px" height="300px" class="ms-5" src="./Images/Mist.svg" alt="this is image">`
            // }
                
            let imagePath = '';
            if (description === 'overcast clouds') {
                imagePath = './Images/Rain.svg';
            } else if (description === 'thunderstorm') {
                imagePath = './Images/thunder.png';
            } 
            else if (description === 'mist') {
                imagePath = './Images/thunder.png';
            } 
            else{
                imagePath = './Images/thunder.png';
            }
           image1.innerHTML=` <img id=" image1" src="${imagePath}" alt="" width="100%">
           `

            view.innerHTML= ` 
            <div class="row m-5">
            <div class="col-2">
            </div>
            <div id="main-div" class="col-8 " >
                <div class="row1 d-flex " >
                    <div class="col-6">
                        <div class="frow">
                            <p>${temperature} °C<br> ${description} <br> 27-05-2024</p>



                        </div>
                        <!-- <div class="srow">
                            <h1>Mist</h1>

                        </div>
                        <div class="trow">
                            <h1>27-05-2024</h1>

                        </div> -->
                        <!-- <div class="row w-10"></div>
                        <div class="row w-10" ></div>
                        <div class="row w-10"></div> -->


                    </div>
                    <div class="col-6 ">
                        <img id=" image1" src="" alt="" width="100%">
                    </div>
                </div>
                <div class="row2 d-flex m-5">
                    <div class="col-2">

                    </div>
                    <div id="country" class="col-2 pt-3 ">
                        <div>
                            <p> Country</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-globe fa-fade fs-5"></i>                            
                        </div>
                        <p>${country}</p>
                    </div>
                    <div id="Humidity" class="col-2 ms-3 pt-3 ">
                        <div>
                            <p> Humidity</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-droplet fa-beat-fade fs-5"></i>                                
                            <p>${humidity}%</p>
                        </div>
                    </div>
                    <div id="Wind"  class="col-2 ms-3 pt-3 ">
                        <div>
                            <p> Wind</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-wind fa-fade fs-5"></i>
                            <p>${wind}kmph</p>
                        </div>
                    </div>
                    <div id="Presure" class="col-2 ms-3 pt-3 ">
                        <div>
                            <p>Presure</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-fire fa-fade fs-4"></i>                                
                            <p>${pressure}</p>
                        </div>
                    </div>
                    <div class="col-2">

                    </div>
                </div>
                <!-- <div class="row3 d-flex m-5">
                    <div class="col-3"></div>
                    <div class="col-2"></div>
                    <div class="col-2">
                        <div>
                            <p>kudu</p>
                        </div>
                        <div>
                            <img src="./Images/Snow.svg" alt="">
                            <p>100</p>
                        </div>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-3"></div>
                </div> -->
            </div>
            <div class="col-2">
            </div>
        </div>
    </div>
            
            `

        })

    }

    
    
    else{
        alert('Enter a valid input')
    }
    
}
function reset() {
    city.value = ""
}