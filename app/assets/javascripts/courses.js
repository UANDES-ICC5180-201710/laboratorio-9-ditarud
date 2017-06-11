// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//

function like(clicked_course_id){
  $button = $('#'+clicked_course_id);


  $.ajax({
    type: "GET",
    dataType: "json",
    url: $url,
    data: {
      course_id: clicked_course_id
    }

  });


}




$(document).ready(function() {
  var $addPersonForm = $('#addPersonAndEnrollment form');

  $addPersonForm.on('ajax:success', function(e, data, status, xhr)  {
    var $newHtml = $(data);
    $addPersonForm.html($newHtml.find('form#new_person').html());
  }).on('ajax:error', function(e, xhr, status, error) {
    alert(error);
  });
});
