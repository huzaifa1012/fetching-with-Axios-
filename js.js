let btn = document.querySelector(".btn");
let cityName = document.querySelector('.city');
let inputCity = document.querySelector('.location');
let weather = document.querySelector('.weather');
let key = 'a71c5d04b983477690f212802232002'
btn.addEventListener("click", fetchData);
async function fetchData(event) {
    event.preventDefault();
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${inputCity.value}`)
    .then((result) => {console.log(result.data)
        cityName.innerHTML = result.data.location.name
        weather.innerHTML = result.data.current.feelslike_c
    }).catch((err) => {
if (inputCity.value === "") {
    cityName.innerHTML = "Form is Empty"
    
}
else{
    
    cityName.innerHTML = "Wrong City"
    console.log(err)
}
    });

}




