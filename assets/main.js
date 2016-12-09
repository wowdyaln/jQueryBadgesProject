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

    courses.forEach(function(course) {

      console.log(course);

      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        herf: course.url,
        text: 'see course'
      }).appendTo($course); //按鈕案下去無法連結？


    })
  }


});
