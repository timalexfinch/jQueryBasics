'use strict';

$(function () {

    //$('a').click(function () {
    //    alert('byeeee');
    //});

    $("#txtDatePicker").datepicker();
    $("#customers").accordion();
    $("#btnClickMe").click(function () {
        $("#lblOutput").text("Hello from jQuery");
    });

    $("#firstDiv").hover(function () {
        $(this).addClass("lightBlue");
    }, function () {
        $(this).removeClass("lightBlue");
    });

    $("#somePara").click(function () {
        $(this).removeClass("silver")
            .addClass("lightBlue")
            .html("Sausages!")
            .css("font-size", "xx-large")
            .fadeOut()
            .fadeIn();
    });
});
