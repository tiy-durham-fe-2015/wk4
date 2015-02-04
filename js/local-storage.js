$(function () {

  // A few functions we don't cover here, but that are
  // handy to know about are:
  //
  // localStorage.removeItem('key')
  //
  // localStorage.clear()
  // 

  var users = loadUsers();
  redrawUsers();

  $('.user-form').submit(function () {
    addUser();
    redrawUsers();
    resetForm();

    return false;
  });

  $('.clear-users').click(function () {
    users = [];
    saveUsers();
    redrawUsers();
  });

  function addUser() {
    users.push({
      firstName: $('input[name=firstName]').val(),
      lastName: $('input[name=lastName]').val()
    });

    saveUsers();
  }

  function redrawUsers() {
    $('.user-list').html(users.map(function (user) {
      return '<li>' + user.firstName + ' ' + user.lastName + '</li>';
    }));
  }

  function resetForm() {
    $('.user-form input').val('').first().focus();
  }

  function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
  }

  function loadUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

});
