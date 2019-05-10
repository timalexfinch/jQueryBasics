"use strict";

$(function () {

    $("#btnGetRandomUser").click(function () {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: gotUser,
            error: AjaxFailed
        })
            .then(AjaxSucceeded)
            .catch(AjaxFailed);
    });

    $("#btnCallAJAX").click(function () {
        $.ajax({
            url: 'api/getTime'
        })
            .then(AjaxSucceeded)
            .catch(AjaxFailed);
    });
});

// End of jQuery document.ready()
// Now here's a bunch of javaScript functions:

function gotUser(user) {
    var thisUser = user.results[0];

    $('#randomUser').html(
        '<img id=userPicture src=' + thisUser.picture.large + ' /><br /><br />' +
        thisUser.name.title + ' ' +
        thisUser.name.first + ' ' +
        thisUser.name.last + '<br />' +
        thisUser.location.street + '<br />' +
        thisUser.location.city + '<br />' +
        thisUser.nat + '<br />' +
        thisUser.email + '<br />' +
        'Username: ' +
        thisUser.login.username + '<br /><br />'
    )
        .css({
            'background-color': 'lightblue',
            'color': 'red',
            'font-size': 'large'
        });
}

function completeFunction(responseText, textStatus, request) {
    $("#lblEinstein").css('border', '1px solid #e8e8e8');
    if (textStatus === 'error') {
        $("#lblEinstein").text('An error occurred during your request: ' + request.status + ' ' + request.statusText);
    }
}

function replacePage(response) {
    document.write(response);
}

function AjaxSucceeded(response) {
    $("#lblAJAXout").html(response);
}

function AjaxFailed(response) {
    alert(response.status + " " + response.statusText);
}

function BuildTable(response) {
    var countryList = response.RestResponse.result;
    var table = '<table><thead><tr>' +
        '<th>Country Name</th><th>A2 Code</th><th>A3 Code</th></tr></thead><tbody>';

    // This is probably the most common way - using for..in:

    //for (var i in countryList) {
    //    var row = '<tr>';
    //    row += '<td>' + countryList[i].name + '</td>';
    //    row += '<td>' + countryList[i].alpha2_code + '</td>';
    //    row += '<td>' + countryList[i].alpha3_code + '</td>';
    //    row += '</tr>';
    //    table += row;
    //}

    // this is the recommended way, using for:

    for (var i = 0, cl = countryList.length; i < cl; i++) {
        var row = '<tr>';
        row += '<td>' + countryList[i].name + '</td>';
        row += '<td>' + countryList[i].alpha2_code + '</td>';
        row += '<td>' + countryList[i].alpha3_code + '</td>';
        row += '</tr>';
        table += row;
    }
    table += '</tbody></table>';
    $('#container').html(table);
}


