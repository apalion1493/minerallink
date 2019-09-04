// = jquery/jquery.min.js
// = bootstrap/bootstrap.min.js



$(document).ready(function () {
    $('.table-btn').click(function () {
        $('.test-class').toggle();
        $('.table-btn-tr').remove();
    });
});