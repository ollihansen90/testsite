$('#buttonyes').click(function(){
    versteckeKlassen();
    $('#imgno').removeClass();
    $('#imgno').addClass('imgshow');
});

$('#buttonno').click(function(){
    versteckeKlassen();
    $('#imgno').removeClass();
    $('#imgno').addClass('imgshow');
});

var versteckeKlassen = function(){
    $('#imgno').css('display', 'none');
    $('#imgno').css('display', 'none');
};
