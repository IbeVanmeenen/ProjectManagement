$(function() {
    initAvgrund();
});


function initAvgrund() {
    $('#settings').click(function(e) {
        e.preventDefault();
        Avgrund.show('#settings-popup');
    });
       
}
