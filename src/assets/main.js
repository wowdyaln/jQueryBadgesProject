$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/993272.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses){

    var $badges = $('#badges');

    courses.forEach(function(courses) {
      $('<div />', {
        'class': 'course'
      }).appendTo($badges);
    })
  }


});
