/*
 * Ajax from scratch - no jQuery
 */
"use strict";

function GetTheData() {
    var myXHR = new XMLHttpRequest();

    myXHR.onreadystatechange = function () {
        if (myXHR.readyState === 4 && myXHR.status === 200) {
            document.getElementById("myOutputDiv").innerHTML = myXHR.responseText;
        }
    };
    myXHR.open('GET', 'Einstein.html', true);
    myXHR.send(null);
}
