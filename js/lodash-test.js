var tpl = { };

// Initialize tpl with all of the templates from our
// script hack in our HTML
(function () {
  $('script[type="text/html"]').each(function () {
    var elem = $(this).remove();
    tpl[elem.attr('id')] = _.template(elem.html(), { 'variable': 'm' });
  });
})();

$(function () {
  var main = $('#main-content');
  var model = {
    user: 'Chris',
    today: 'today',
    tech: [{
      name: 'C#'
    }, {
      name: 'JavaScript'
    }, {
      name: 'HTML'
    }, {
      name: 'CSS'
    }]
  };

  main.html(tpl.body(model));

  // $.get('templates/say-hi.html').done(function (data) {
  //   var template = _.template(data);
  //   main.html(template({
  //     user: 'James <script>alert("hi")</script>',
  //     today: 'this fine saturday'
  //   }));
  // }).fail(function (err, berr) {
  //   alert('Failed to load template: ' + JSON.stringify(berr));
  // });

  //
  // // Documentation: https://lodash.com/docs#template
  // var template = _.template('hello <%- user %>!');
  // main.html(template({ user: 'James <script>alert("hi")</script>' }));
});
