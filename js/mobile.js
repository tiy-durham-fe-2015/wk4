$(function() {

  $('.signup-form').submit(function () {
    var form = $(this);
    var inputElem = $('input', form);

    var html = '<li>' +
      inputElem.val() +
      '<button class="delete-me">X</button>' +
      '</li>';

    $('.user-list').append(html);

    return false;
  });

  function deleteLi () {
    var myButton = $(this);

    myButton.closest('li').remove();
  }

  $('.user-list').on('click', '.delete-me', deleteLi);

  $('.user-list').off('click', '.delete-me', deleteLi);

  // $('li button').click(function () {
  //   var myButton = $(this);
  //
  //   myButton.closest('li').remove();
  //
  //
  // });

});
