
$('#menuOpen').on('click', function () {
    $('.nav-mobile').slideDown();
    $(this).hide();
    $('#menuClose').show()
});

$('#menuClose').on('click', function () {
    $('.nav-mobile').slideUp();
    $(this).hide();
    $('#menuOpen').show()
})
