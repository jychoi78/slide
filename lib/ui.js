$(function(){
  $('.btn-prev').click(

  ),
  $('.btn-next').click(
    function() {
      if ($('.on:last-child').attr('data-index') == $('.section').length-1) {
        alert('다음 화면이 없습니다.')
      }
      if ($('.section').filter('.on').attr('data-index') >= 0) {
        $('.section').filter('.on').next().addClass('on');
      }
    }
  )
});
