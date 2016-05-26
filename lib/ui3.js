$(function(){
  var bodyW = $('body').width();
  var sliderW = $('body').width() * $('.section').filter('.on').attr('data-index');
  var listCount = $('.scene-list > li').length;
  var asIs = $('.section').filter('.on').attr('data-index');
  var first = $('.scene-list > li:first-child').attr('data-index');
  var last = $('.scene-list > li:last-child').attr('data-index');

  $(window).resize(function() {
    var bodyW = $('body').width();

    $('.section-container').css('width',bodyW);
    $('.scene-list').css('width',bodyW*listCount);
    $('.scene-list > li').css('width',bodyW);
    $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index'))); // 왜 변수를 넣으면 안될까요?
    $('.scene-list').css('transition-property','none');
    $('.scene-list').css('transition-duration','none');
  }).trigger('resize');

  function btnPrev(){
    clearInterval(sceneNext);
    var asIs = $('.section').filter('.on').attr('data-index');
    var first = $('.scene-list > li:first-child').attr('data-index');
    var last = $('.scene-list > li:last-child').attr('data-index');

    if (0 < asIs) {
      $('.section').filter('.on').prev().addClass('on');
      $('.section').filter('.on').next().removeClass('on');
      $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
      $('.scene-list').css('transition-property','margin-left');
      $('.scene-list').css('transition-duration','0.5s');
      $('.tab > .as-is').prev().addClass('as-is');
      $('.tab > .as-is').next().removeClass('as-is');
    } else if (asIs == 0) {
      $('.scene-list > li:first-child').removeClass('on');
      $('.scene-list > li:last-child').addClass('on');
      $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
      $('.scene-list').css('transition-property','margin-left');
      $('.scene-list').css('transition-duration','0.5s');
      $('.tab > li:last-child').addClass('as-is');
      $('.tab > li:first-child').removeClass('as-is');
    };
    checkUserIdle();
  };

  function btnNext(){
    clearInterval(sceneNext);
    var asIs = $('.section').filter('.on').attr('data-index');
    var first = $('.scene-list > li:first-child').attr('data-index');
    var last = $('.scene-list > li:last-child').attr('data-index');

    if (asIs < last) {
      $('.section').filter('.on').next().addClass('on');
      $('.section').filter('.on').prev().removeClass('on');
      $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
      $('.scene-list').css('transition-property','margin-left');
      $('.scene-list').css('transition-duration','0.5s');
      $('.tab > .as-is').next().addClass('as-is');
      $('.tab > .as-is').prev().removeClass('as-is');
    } else if (asIs == last) {
      $('.scene-list > li:last-child').removeClass('on');
      $('.scene-list > li:first-child').addClass('on');
      $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
      $('.scene-list').css('transition-property','margin-left');
      $('.scene-list').css('transition-duration','0.5s');
      $('.tab > li:first-child').addClass('as-is');
      $('.tab > li:last-child').removeClass('as-is');
    }
    checkUserIdle();
  }

  function tabClick(event){
    clearInterval(sceneNext);
    var scope = event.currentTarget;
    var index = $(scope).attr('data-index');
    $(scope).addClass('as-is');
    $('.tab > li').not($(scope)).removeClass();
    $('.scene-list > li:eq('+index+')').addClass('on');
    $('.scene-list > li').not($('.scene-list > li:eq('+index+')')).removeClass('on');
    $('.scene-list').css('margin-left', -($('body').width() * index));
    $('.scene-list').css('transition-property','margin-left');
    $('.scene-list').css('transition-duration','0.5s');
    checkUserIdle();
  }

  $('.btn-prev').click(function(){
    btnPrev();
  });

  $('.btn-next').click(function(){
    btnNext();
  });

  $('.scene-list').on('swipeleft' ,function(){
    btnPrev();
  });

  $('.scene-list').on('swiperight' ,function(){
    btnNext();
  });

  $('.tab > li').click(function(e){
    tabClick(e);
  });

  function checkUserIdle() {
    sceneNext = setInterval(function() {
      btnNext();
    }, 2000);
  }

  checkUserIdle();

});
