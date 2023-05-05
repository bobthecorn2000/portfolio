$(document).ready(function() {

  $('#contact-form').submit(function(event) {
    event.preventDefault(); // prevent default form submission behavior

    // get the form data
    var formData = $(this).serialize();

    
    // send the request
    $.ajax({
      url: url,
      method: method,
      data: formData,
      success: function(response) {
        // show the response in the #response element
        $('#response').html(response);
        $('#contact-form')[0].reset(); // reset the form
      },
      error: function(xhr, status, error) {
        // show an error message in the #response element
        $('#response').html('There was an error: ' + error);
      }
    });

  });

});


