$(document).ready(function() {
  // js slider
  $('.slider').bxSlider({
    pager: false,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 7000,
    mode: 'fade'
  });
  $('.sandwitch').click(function(event) {
    $(this).toggleClass('active')
    $('.menu').toggleClass('active animated fadeIn')
  });
});
