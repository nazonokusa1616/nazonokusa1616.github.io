jQuery(document).ready(function( $ ) {

  $('.countdown').each(function() {
    $(this).countdown({
        until: new Date($(this).attr('data-date'))
    });
  });

});

var hiduke = new Date();
hiduke.getFullYear();
hiduke.getMonth();
hiduke.getDate();
var date1 = new Date(2024, 0, 6, 0, 0, 0);

if(hiduke>date1){
    window.alert("特別な日を迎えました");
    window.location.href = './img/16.png';
}
