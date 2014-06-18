    var group = $('#fadeInGroup');

    group.hide();
    var radios = $('input:radio');
    radios.change(function() {
      var value = $(this).val();
      $('#choice').html(value);
      group.fadeIn(2000);
    });

$("#tryitForm").submit(function(e) {
      e.preventDefault();

        $('.form-group').removeClass('has-error'); // remove the error class
        $('.help-block').remove(); // remove the error text


        var url = "/orders/create"; // the script where you handle the form input.
        var form = $('#tryitForm');
        var info = $('#infoBox');

        $('#loadingImage').show();
        $(":submit").attr("disabled", true);

        $.ajax({
         type: "POST",
         dataType: 'json',
         url: url,
               data: form.serialize(), // serializes the form's elements.
               success: function(data) {
                $('#loadingImage').hide();

                $(":submit").attr("disabled", false);

                if (!data.success) {
                  if (data.error.activity_title) {
                        $('#activityGroup').addClass('has-error'); // add the error class to show red input
                        $('#activityGroup').append('<div class="help-block">' + data.error.activity_title + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.date) {
                        $('#dateGroup').addClass('has-error'); // add the error class to show red input
                        $('#dateGroup').append('<div class="help-block">' + data.error.date + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.firstName) {
                        $('#fnameGroup').addClass('has-error'); // add the error class to show red input
                        $('#fnameGroup').append('<div class="help-block">' + data.error.firstName + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.lastName) {
                        $('#lnameGroup').addClass('has-error'); // add the error class to show red input
                        $('#lnameGroup').append('<div class="help-block">' + data.error.lastName + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.email) {
                        $('#emailGroup').addClass('has-error'); // add the error class to show red input
                        $('#emailGroup').append('<div class="help-block">' + data.error.email + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.streetName) {
                        $('#streetGroup').addClass('has-error'); // add the error class to show red input
                        $('#streetGroup').append('<div class="help-block">' + data.error.streetName + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.zip) {
                        $('#zipGroup').addClass('has-error'); // add the error class to show red input
                        $('#zipGroup').append('<div class="help-block">' + data.error.zip + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.city) {
                        $('#cityGroup').addClass('has-error'); // add the error class to show red input
                        $('#cityGroup').append('<div class="help-block">' + data.error.city + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.participants) {
                        $('#participantsGroup').addClass('has-error'); // add the error class to show red input
                        $('#participantsGroup').append('<div class="help-block">' + data.error.participants + '</div>'); // add the actual error message under our input
                      }
                    } else {
                      form.addClass('form-after-submit').html("<h1><i class='fa fa-check-circle' style='color: #37BC9B; font-size: 70px;'></i><br>Tak for din bestilling.</h1><p class='lead'>Vi vender tilbage indenfor 24 timer, hvis du har yderligere spørgsmål er du velkommen til at <a href='#'>kontakte</a> os.</p>");
                      $('form-after-submit').fadeIn("slow");
                    }

                  },
                  error: function(){}
                });
  });