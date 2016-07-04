

$('.navbar-minimalize').click(function(){
    $('body').toggleClass('mini-navbar');
    $(this).parents().find('.sidebar-collapse').toggleClass('fadeInUp');
})
