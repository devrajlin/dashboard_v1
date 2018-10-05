$('.dateP').datetimepicker();

$('.dupli').on( 'click', function(e){
  var dup = $('.cpy').first().clone();
  $('.table').append( dup );
  $('.dateP').datetimepicker();
});