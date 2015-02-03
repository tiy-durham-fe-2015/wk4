$(function () {
  // For documentation about lodash templates, see:
  // https://lodash.com/docs#template

  // We should use a store, but for simplicity sake,
  // we will just store users in an array.
  var users = [];
  var usersTemplate = _.template($('#user-list-template').html());

  // When the form is submitted, create a User object,
  // and add it to our users list, then redraw the
  // users list.
  $('.user-form').submit(function () {
    addUserFromForm();
    redrawUsers();
    resetUserForm();

    return false;
  });

  // Create a user from the form inputs.
  function addUserFromForm() {
    var user = User({
      firstName: $('.user-form .first-name').val(),
      lastName: $('.user-form .last-name').val()
    });

    users.push(user);
  }

  // Resets the inputs in the user form
  function resetUserForm() {
    $('.user-form input').val('');
    $('.user-form .first-name').focus();
  }

  // Redraw the users list by manually building the
  // HTML string and inserting values.
  function redrawUsers() {
    var lis = usersTemplate({ users: users });
    $('.user-list').html(lis);
  }

});
