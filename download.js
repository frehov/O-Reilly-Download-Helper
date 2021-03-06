var pageURL = location.href.replace(/csp.*/, "csp?download=true");

document.getElementById("x_a").addEventListener("click", function () {
    createCookie("DLFRMFL", true, 0.5);
});

dlBtn = "<a href='" + pageURL + "' class='btn'>Go to Download</a>";

if(readCookie("DLFRMFL") === "true") {
    $(".download-form > .fwb").text("Download the eBook");
    $("#download_requests_form").append(dlBtn);
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