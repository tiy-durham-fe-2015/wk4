$(function () {
  var page1Html = $('#page1').html();
  var page2Html = $('#page2').html();


  $('.spa-content').html(page1Html);

  $('.panel-1').click(function () {
    $('.spa-content').html(page2Html);
  });
});
