async function getWeather(){
    
    var cidade = document.getElementById('city').value 

    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);
    
    var tempCelsius = resposta.data.main.temp;

    document.getElementById('temperatura').innerHTML = ` A temperatura atual de ${cidade} é: ${tempCelsius.toFixed(2)} °C `;
    
}
getWeather();