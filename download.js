var pageURL = location.href.replace(/csp.*/, "csp?download=true");
var downloadURL = pageURL.replace(/\/free\//, "/free/files/").replace(/csp.*/, "");

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
