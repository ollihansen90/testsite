$('#buttonyes').click(function(){
    versteckeKlassen();
    $('#imgno').removeClass();
    $('#imgno').addClass('imgshow');
});

$('#buttonno').click(function(){
    versteckeKlassen();
    $('#imgyes').removeClass();
    $('#imgyes').addClass('imgshow');
});

var versteckeKlassen = function(){
    $('#imgyes').removeClass();
    $('#imgyes').addClass('imggone');
    $('#imgno').removeClass();
    $('#imgno').addClass('imggone');
};
