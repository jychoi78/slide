$(function(){
  var w = $('body').width();
  var listCount = $('.scene-list > li').length;
  var sliderW = $('body').width() * $('.section').filter('.on').attr('data-index');

  $(window).resize(function() {
    $('.section-container').css('width',w);
    $('.scene-list').css('width',w*listCount);
    $('.scene-list > li').css('width',w);
  }).trigger('resize');

  $('.btn-prev').click(
    function(){
      if ($('.section').filter('.on').attr('data-index') >= 0) {
        $('.section').filter('.on').prev().addClass('on');
        $('.section').filter('.on').next().removeClass('on');
        $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
        $('.tab > .as-is').prev().addClass('as-is');
        $('.tab > .as-is').next().removeClass('as-is');
      }
    }
  );

  $('.btn-next').click(
    function(){
      if ($('.section').filter('.on').attr('data-index') >= 0) {
        $('.section').filter('.on').next().addClass('on');
        $('.section').filter('.on').prev().removeClass('on');
        $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
        $('.tab > .as-is').next().addClass('as-is');
        $('.tab > .as-is').prev().removeClass('as-is');
      }
    }
  );

  $('.tab > li').click(
    function(){
      var a = $(this).attr('data-index');
      $(this).addClass('as-is');
      $('.tab > li').not($(this)).removeClass();
      $('.scene-list > li:eq('+a+')').addClass('on');
      $('.scene-list > li').not($('.scene-list > li:eq('+a+')')).removeClass('on');
      $('.scene-list').css('margin-left', -($('body').width() * a));
    }
  )
})
