$(function() {
  $(document).scroll(function() {
    // console.log($(document).scrollTop());
    if (
      $(document).scrollTop() >=
      $('.skillSet').offset().top - $(window).height() + 100
    ) {
      $('.skill').addClass('fadeInRight');
      setTimeout(function() {
        $('.skill').removeClass('hidden');
      }, 2000);
    }
    if (
      $(document).scrollTop() >=
      $('.icons').offset().top - $(window).height() + 50
    ) {
      $('.icon').addClass('bounceInDown');
      setTimeout(function() {
        $('.icon').removeClass('hidden');
      }, 1000);
    }
    if (
      $(document).scrollTop() >=
      $('.projectCards').offset().top - $(window).height() + 100
    ) {
      $($('.projectCards').children()[0]).addClass('fadeInLeft');
      $($('.projectCards').children()[1]).addClass('fadeInUp');
      $($('.projectCards').children()[2]).addClass('fadeInRight');
      $($('.projectCards').children()[3]).addClass('fadeInRight');
      $($('.projectCards').children()[4]).addClass('fadeInDown');
      $($('.projectCards').children()[5]).addClass('fadeInLeft');
      setTimeout(function() {
        $('.projectCards')
          .children()
          .removeClass('hidden');
      }, 2000);
    }
  });
});
