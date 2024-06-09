import $ from "jquery";

$(document).ready(function () {
    $("#yippie").click(() => {
        const audio = new Audio("/yippie.mp3");
        audio.play();
    });
});