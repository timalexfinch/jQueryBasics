/*
 * This is the version that DOES use JSONP
 * 
 */

"use strict";

$(function () {
    $('#btnGetWeather').click(GetLocalWeather);
});

function GetLocalWeather(e) {

    var localWeatherInput = {
        query: document.getElementById("txtLocation").value,
        format: 'JSON',
        num_of_days: '2',
        date: '',
        fx: '',
        cc: '',
        includelocation: '',
        show_comments: '',
        callback: 'LocalWeatherCallback'
    };

    JSONP_LocalWeather(localWeatherInput);
    e.preventDefault();
}

function LocalWeatherCallback(localWeather) {
    var resultContainer = $('#whatsTheWeather');
    var output = '';

    output = "<strong> Weather in " + localWeather.data.request[0].query + ":</strong>";
    output += ' <img src="' + localWeather.data.current_condition[0].weatherIconUrl[0].value + '"/>';
    output += "<br/> Description: " + localWeather.data.current_condition[0].weatherDesc[0].value;
    //  output += "<br/> Cloud Cover: " + localWeather.data.current_condition[0].cloudcover;
    output += "<br/> Humidity: " + localWeather.data.current_condition[0].humidity;
    output += "<br/> Temp C: " + localWeather.data.current_condition[0].temp_C;
    // output += "<br/> Visibility: " + localWeather.data.current_condition[0].weatherDesc[0].value;
    output += "<br/> Observation Time: " + localWeather.data.current_condition[0].observation_time;
    output += "<br/> Pressure: " + localWeather.data.current_condition[0].pressure;

    resultContainer.empty();
    resultContainer.html(output);
}

function JSONP_LocalWeather(input) {
    var _FreeApiBaseURL = 'http://api.worldweatheronline.com/free/v2/';

    var _FreeApiKey = '60747f64465fa883ee33170b5ae58';
    //var _FreeApiKey = 'xkq544hkar4m69qujdgujn7w';

    var url = _FreeApiBaseURL + 'weather.ashx?q=' + input.query + '&format=' + input.format + '&extra=' + input.extra + '&num_of_days=' + input.num_of_days + '&date=' + input.date + '&fx=' + input.fx + '&cc=' + input.cc + '&includelocation=' + input.includelocation + '&show_comments=' + input.show_comments + '&key=' + _FreeApiKey;

    jsonP(url, input.callback);
}

// Helper Method
function jsonP(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            console.dir('success');
        },
        error: function (response) {
            alert(response.status + ' ' + response.statusText);
            //console.log(e.message);
        }
    });
}


