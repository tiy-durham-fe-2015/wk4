$(function () {
  var mainContent = $('#main-content');

  mainContent.html(views.page1({
    name: 'Class',
    description: 'awesome'
  }));

  mainContent.on('click', '.next', function () {
    mainContent.html(views.page2({
      name: 'Everyone',
      message: 'All done!'
    }));
  });
})
