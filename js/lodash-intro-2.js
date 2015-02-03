$(function () {
  // For documentation about lodash templates, see:
  // https://lodash.com/docs#template

  // Templates are like an advanced string.replace function.
  // They take a string, look through it for special patterns,
  // and then replace those patterns with actual data or
  // whatevz.
  //
  // The basics are as follows:
  //
  // Anywhere you see <%- m.bar %>, the value of m.bar will
  // be escaped.
  //
  // Anywhere you see <%= m.bar %>, the value of m.bar will
  // not be escaped
  //
  // If you just want to run some JavaScript, but not actually
  // output anything, you would do something like this:
  //
  // <% console.log('hey!') %>
  //
  // Note, the <% without any - or =
  //
  // That's about it!


  // Play around with this and see what happens...
  var h1Template = _.template('Hello, <%- name %>!');
  var h1Html = h1Template({ name: 'Everyone' });
  $('h1').html(h1Html);

  // This template shows how you would inject escaped
  // values into your template.
  var p1Template = _.template('This is <%- value %>...');
  var escaped = p1Template({ value: '<strong>really cool</strong>' });
  $('p').first().html(escaped);

  // This template shows how you would inject raw HTML
  var p2Template = _.template('This is <%= value %>...');
  var unescaped = p2Template({ value: '<strong>really cool</strong>' });
  $('p').last().html(unescaped);

  // This template shows how you might do a loop or other
  // javascripty stuff in your template:
  var ulTemplate = _.template('<% items.forEach(function (item) { %>' +
    '<li><%- item %></li>' +
    '<% }) %>');
  var ulHtml = ulTemplate({ items: ['JavaScript', 'HTML', 'CSS', 'C#'] });
  $('ul').html(ulHtml);

});
