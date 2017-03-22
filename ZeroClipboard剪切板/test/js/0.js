$(function () {
    var client = new ZeroClipboard($("button"));
    client.on('copy', function (event) {
        event.clipboardData.setData('text/plain', "hehe");
    });
});