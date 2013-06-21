define(["jquery"], function($) {
    $(function() {
        var version = $().jquery;
        $('#version').text(version);
    });
});