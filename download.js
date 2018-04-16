var pageURL = location.href.replace(/csp.*/, "csp?download=true");
var downloadURL = pageURL.replace(/\/free\//, "/free/files/").replace(/csp.*/, "");

dlBtn = document.getElementById("x_a")

dlBtn.addEventListener("click", function () {
    createCookie("DownloadFormFilled", true, 1);
});

if(readCookie("DownloadFormFilled") === "true") {
    downloadHeader = $(".download-form > .fwb").text("Download the eBook");
    var dlDiv = $(".download-form");
    dlDiv.empty();
    dlDiv.append(downloadHeader);

    $.get(pageURL, null, function(text) {
        var downloadField = $(text).find(".download-links");
        dlDiv.append(downloadField);

        var buttons = $.find("a[id*='download--']");
        for(i = 0; i < buttons.length; i++) {
            $(buttons[i]).attr("href", downloadURL.concat(buttons[i].childNodes[1].textContent.toLowerCase()));
        }
    });
}

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}