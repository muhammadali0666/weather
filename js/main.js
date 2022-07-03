const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form__input");
const elWrapper = document.querySelector(".result");

elForm.addEventListener("submit", (event)=> {
  event.preventDefault()

  let inputValue = elInput.value;
  elInput.value = null;
  callData(inputValue)
});

const renderWeather = function(info) {
    const html = `
    <h2 class="country-name">${info.name}</h2>
    <p class="select-country bg-danger">Country: ${info.sys.country}</p>
    <p class="digrel-temper">Temperatura: ${info.main.temp}°C</p>
    <p class="speed">Speed: ${info.wind.speed}m/s</p>
    `
    elWrapper.innerHTML = null;
    elWrapper.insertAdjacentHTML("beforeend", html)
}


const callData = function (worldWeather) {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${worldWeather}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
         .then(ops => ops.json())
         .then(info => renderWeather(info));
        
}