$(function() {

  $('.delete-me').click(function () {
    var theButton = $(this);

    theButton.closest('li').remove();
  });

});
