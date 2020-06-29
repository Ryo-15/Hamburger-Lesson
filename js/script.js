$(function(){
  $('.menu-trigger').on('click', function(){
    $(this).toggleClass('active');
    // .fadeToggle( )でフェードイン・フェードアウトを切り替える
    $('#sp-menu').fadeToggle();
    return false;
  });
});