$(function () {
  var profileTemplate = _.template($('#profileTemplate').html(), { variable: 'm' });

  // Here's the interesting bit.
  // $.getJSON says, go get a JavaScript object from the URL I specify
  // When you've got that object, call the done callback...
  // If you fail to get that object, call the fail callback...
  $.getJSON('https://api.github.com/users/chrisdavies')
    .done(function (data) {
      $('#main-content').html(profileTemplate(data));
    })
    .fail(function (request, status, err) {
      console.log(err);
      alert('Failed to connect to GitHub... See console for details.');
    });

  // Another way to have written this would be like:
  // $.ajax({
  //  dataType: "json",
  //  url: 'https://api.github.com/users/chrisdavies',
  // })
  // .done(function (data) { })
  // .fail(function (request, status, err) { });


  // For now, we are only ever getting data, but if you wanted to
  // send data to the server, you could do something like this:
  //
  // $.ajax({
  //   type: 'POST',
  //   url: 'https://api.somesite.com/users',
  //   data: JSON.stringify({ firstName: 'Chris', lastName: 'Davies' }),
  //   dataType: 'json'
  // })
  // .done(function (result) {
  //    // The post succeeded, and result is any data that the
  //    // server returned from the POST operation
  // })
  // .fail(function (request, status, err) {
  //    // The post failed, and err is the reason
  // });
  //
  // You may also PUT, PATCH, or DELETE
});
