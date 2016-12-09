$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/993272.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response', response);
    }
  })

});
