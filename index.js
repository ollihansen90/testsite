$('#buttonyes').click(function(){
    versteckeKlassen();
    //alert("Click yes!");
    $('#imgno').removeClass();
    $('#imgno').addClass('imgshow img-fluid');
});

$('#buttonno').click(function(){
    versteckeKlassen();
    //alert("Click no!");
    $('#imgyes').removeClass();
    $('#imgyes').addClass('imgshow img-fluid');
});

var versteckeKlassen = function(){
    $('#imgyes').removeClass();
    $('#imgyes').addClass('imggone');
    $('#imgno').removeClass();
    $('#imgno').addClass('imggone');
};
