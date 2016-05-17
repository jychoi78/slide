$(function(){
  var w = $('body').width();
  var listCount = $('.scene-list > li').length;
  var sliderW = $('body').width() * $('.section').filter('.on').attr('data-index');

  $(window).resize(function() {
    $('.section-container').css('width',w);
    $('.scene-list').css('width',w*listCount);
    $('.scene-list > li').css('width',w);
  }).trigger('resize');

  var btnPrve = function(){
    if ($('.section').filter('.on').attr('data-index') >= 0) {
      $('.section').filter('.on').prev().addClass('on');
      $('.section').filter('.on').next().removeClass('on');
      $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
      $('.tab > .as-is').prev().addClass('as-is');
      $('.tab > .as-is').next().removeClass('as-is');
    }
  }

  var btnNext = function(){
    if ($('.section').filter('.on').attr('data-index') >= 0) {
      $('.section').filter('.on').next().addClass('on');
      $('.section').filter('.on').prev().removeClass('on');
      $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
      $('.tab > .as-is').next().addClass('as-is');
      $('.tab > .as-is').prev().removeClass('as-is');
    }
  }

  var tabClick = function(){
    var a = $(this).attr('data-index');
    $(this).addClass('as-is');
    $('.tab > li').not($(this)).removeClass();
    $('.scene-list > li:eq('+a+')').addClass('on');
    $('.scene-list > li').not($('.scene-list > li:eq('+a+')')).removeClass('on');
    $('.scene-list').css('margin-left', -($('body').width() * a));
  }

  var slideNext = function(){
    if ($('.section').filter('.on').attr('data-index') < $('.section').filter('.on').next().attr('data-index')) {
      setTimeout(btnNext, 1000)
    } else if ($('.section').filter('.on').attr('data-index') > $('.section').filter('.on').next().attr('data-index')) {
      setTimeout(btnPrve, 1000)
    } else{
      setTimeout(btnPrve, 1000)
    }
  }

  $('.btn-prev').click(btnPrve);

  $('.btn-next').click(btnNext);

  $('.tab > li').click(tabClick);

  //setInterval(slideNext, 1000);
})
