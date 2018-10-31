/*
 * This is the version that DOESN'T use JSONP
 * 
 */

"use strict";

$(function () {
    $('#btnGetWeather').click(function () {
        var input = {
            query: document.getElementById("txtLocation").value,
            format: 'JSON',
            num_of_days: '2',
            date: '',
            fx: '',
            cc: '',
            includelocation: '',
            show_comments: '',
        };
        var _FreeApiBaseURL = 'http://api.worldweatheronline.com/free/v2/';
        var _FreeApiKey = '60747f64465fa883ee33170b5ae58';
        var url = _FreeApiBaseURL + 'weather.ashx?q=' + input.query + '&format=' + input.format + '&extra=' + input.extra + '&num_of_days=' + input.num_of_days + '&date=' + input.date + '&fx=' + input.fx + '&cc=' + input.cc + '&includelocation=' + input.includelocation + '&show_comments=' + input.show_comments + '&key=' + _FreeApiKey;

        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            contentType: "application/json",
            success: LocalWeatherCallback,
            error: function (response) {
                alert(response.status + ' ' + response.statusText);
            }
        });
    });
});


function LocalWeatherCallback(localWeather) {
    var resultContainer = $('#whatsTheWeather');
    var output = '';

    output = "<strong> Weather in " + localWeather.data.request[0].query + ":</strong>";
    output += ' <img src="' + localWeather.data.current_condition[0].weatherIconUrl[0].value + '"/>';
    output += "<br/> Description: " + localWeather.data.current_condition[0].weatherDesc[0].value;
    output += "<br/> Humidity: " + localWeather.data.current_condition[0].humidity;
    output += "<br/> Temp C: " + localWeather.data.current_condition[0].temp_C;
    output += "<br/> Visibility: " + localWeather.data.current_condition[0].weatherDesc[0].value;
    output += "<br/> Observation Time: " + localWeather.data.current_condition[0].observation_time;
    output += "<br/> Pressure: " + localWeather.data.current_condition[0].pressure;

    resultContainer.empty();
    resultContainer.html(output);
}