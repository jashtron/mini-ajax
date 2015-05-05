$(document).ready(function() {

$.get('send-ajax-data.php', function(data) {
    alert(data);
});
});