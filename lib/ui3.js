$(function(){
  var bodyW = $('body').width();
  var sliderW = $('body').width() * $('.section').filter('.on').attr('data-index');
  var listCount = $('.scene-list > li').length;
  var asIs = $('.section').filter('.on').attr('data-index')

  $(window).resize(function() {
    var bodyW = $('body').width();

    $('.section-container').css('width',bodyW);
    $('.scene-list').css('width',bodyW*listCount);
    $('.scene-list > li').css('width',bodyW);
    $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index'))); // 왜 변수를 넣으면 안될까요?
    $('.scene-list').css('transition-property','none');
    $('.scene-list').css('transition-duration','none');
  }).trigger('resize');

  var btnPrev = function(){
    if (asIs >= 0) {
      $('.section').filter('.on').prev().addClass('on');
      $('.section').filter('.on').next().removeClass('on');
      $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
      $('.scene-list').css('transition-property','margin-left');
      $('.scene-list').css('transition-duration','0.5s');
      $('.tab > .as-is').prev().addClass('as-is');
      $('.tab > .as-is').next().removeClass('as-is');
    }
  }

  var btnNext = function(){
    if (asIs >= 0) {
      $('.section').filter('.on').next().addClass('on');
      $('.section').filter('.on').prev().removeClass('on');
      $('.scene-list').css('margin-left',-($('body').width() * $('.section').filter('.on').attr('data-index')));
      $('.scene-list').css('transition-property','margin-left');
      $('.scene-list').css('transition-duration','0.5s');
      $('.tab > .as-is').next().addClass('as-is');
      $('.tab > .as-is').prev().removeClass('as-is');
    }
  }

  var tabClick = function(event){
    var scope = event.currentTarget;
    var index = $(scope).attr('data-index');
    $(scope).addClass('as-is');
    $('.tab > li').not($(scope)).removeClass();
    $('.scene-list > li:eq('+index+')').addClass('on');
    $('.scene-list > li').not($('.scene-list > li:eq('+index+')')).removeClass('on');
    $('.scene-list').css('margin-left', -($('body').width() * index));
    $('.scene-list').css('transition-property','margin-left');
    $('.scene-list').css('transition-duration','0.5s');
  }

  $('.btn-prev').click(function(){
    btnPrev();
    clearInterval(sceneNext);
  })

  $('.btn-next').click(function(){
    btnNext();
    clearInterval(sceneNext);
  });

  $('.tab > li').click(function(e){
    tabClick(e);
    clearInterval(sceneNext);
  });

  var count = 0;
  var direction = 1; // 1  or -1
  var sceneNext = setInterval(function(){
      if(direction == 1){
        btnNext();
        count++;

        if(count==$('.section:last-child').filter('.on').attr('data-index')){
          direction = -1
        }
      }else if(direction == -1){
        btnPrev();
        count--;

        if(count==$('.section:first-child').filter('.on').attr('data-index')){
          direction = 1
        }
      }

  }, 1000);

});
