$(document).ready(function(){
    let city = 'LVIV';
    weather(city);
    $('#lviv').on('click', function(){
        city = 'LVIV';
        weather(city);
    });
    $('#kyiv').on('click', function(){
        city = 'KYIV';
        weather(city);
    });
    $('#odesa').on('click', function(){
        city = 'ODESSA';
        weather(city);
    });
});

function weather(city){
    $.ajax({
        method: "GET",
        url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`,
        success: function(response){
            let iconcode = response.weather[0].icon;
            let iconUrl = `http://openweathermap.org/img/w/${iconcode}.png`;
            $("#city").text(response.name);
            $('#icon').attr('src', iconUrl);
            $('#weather-description').text(response.weather[0].description);
            $('#temp').text(response.main.temp.toFixed(1) +' °C');
            $("#pressure").text(response.main.pressure + ' mmHg');
            $("#humidity").text(response.main.humidity + ' %');
            $("#wind-speed").text(response.wind.speed + ' km/h');
            $("#wind-dig").text(response.wind.deg + ' deg');
        }
    })
}