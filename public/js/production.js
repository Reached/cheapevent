(function() {
      var triggerBttn = document.getElementById( 'trigger-overlay' ),
        overlay = document.querySelector( 'div.overlay' ),
        closeBttn = overlay.querySelector( 'button.overlay-close' );
        transEndEventNames = {
          'WebkitTransition': 'webkitTransitionEnd',
          'MozTransition': 'transitionend',
          'OTransition': 'oTransitionEnd',
          'msTransition': 'MSTransitionEnd',
          'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };

      function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
          classie.remove( overlay, 'open' );
          classie.add( overlay, 'close' );
          var onEndTransitionFn = function( ev ) {
            if( support.transitions ) {
              if( ev.propertyName !== 'visibility' ) return;
              this.removeEventListener( transEndEventName, onEndTransitionFn );
            }
            classie.remove( overlay, 'close' );
          };
          if( support.transitions ) {
            overlay.addEventListener( transEndEventName, onEndTransitionFn );
          }
          else {
            onEndTransitionFn();
          }
        }
        else if( !classie.has( overlay, 'close' ) ) {
          classie.add( overlay, 'open' );
        }
      }

      triggerBttn.addEventListener( 'click', toggleOverlay );
      closeBttn.addEventListener( 'click', toggleOverlay );
    })();

    var group = $('#fadeInGroup');

    group.hide();
    $("input:radio[name=activity_title]").click(function() {
      var value = $(this).val();
      $("label[for=activity_title]");
      $('#choice').html(value);
      group.slideDown(1000);
    });

    $(function () {
      $('#timePicker').datetimepicker({
              pickDate: true,                 //en/disables the date picker
              pickTime: true,                 //en/disables the time picker
              useCurrent: false,               //when true, picker will set the value to the current date/time
              useMinutes: false,               //en/disables the minutes picker
              useSeconds: false,
              showToday: true,
              language: 'da',
              icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down",

              }
            });
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
                    } else {
                      form.addClass('form-after-submit').html("<h1><i class='fa fa-check-circle' style='color: #37BC9B; font-size: 70px;'></i><br>Tak for din bestilling.</h1><p class='lead'>Vi vender tilbage indenfor 24 timer, hvis du har yderligere spørgsmål er du velkommen til at <a href='#'>kontakte</a> os.</p>");
                      $('form-after-submit').fadeIn("slow");
                      form.scrollTo();
                    }

                  },
                  error: function(){}
                });
  });

    /*!
 * Jasny Bootstrap v3.1.0 (http://jasny.github.com/bootstrap)
 * Copyright 2011-2014 Arnold Daniels.
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */

 +function(a){"use strict";var b=window.navigator.appName=="Microsoft Internet Explorer",c=function(b,c){this.$element=a(b),this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||c.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=a('<input type="hidden">').insertBefore(this.$input)),this.$preview=this.$element.find(".fileinput-preview");var d=this.$preview.css("height");this.$preview.css("display")!=="inline"&&d!=="0px"&&d!=="none"&&this.$preview.css("line-height",d),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()};c.prototype.listen=function(){this.$input.on("change.bs.fileinput",a.proxy(this.change,this)),a(this.$input[0].form).on("reset.bs.fileinput",a.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",a.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",a.proxy(this.clear,this))},c.prototype.change=function(b){var c=b.target.files===undefined?b.target&&b.target.value?[{name:b.target.value.replace(/^.+\\/,"")}]:[]:b.target.files;b.stopPropagation();if(c.length===0){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var d=c[0];if(this.$preview.length>0&&(typeof d.type!="undefined"?d.type.match(/^image\/(gif|png|jpeg)$/):d.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!="undefined"){var e=new FileReader,f=this.$preview,g=this.$element;e.onload=function(b){var e=a("<img>");e[0].src=b.target.result,c[0].result=b.target.result,g.find(".fileinput-filename").text(d.name),f.css("max-height")!="none"&&e.css("max-height",parseInt(f.css("max-height"),10)-parseInt(f.css("padding-top"),10)-parseInt(f.css("padding-bottom"),10)-parseInt(f.css("border-top"),10)-parseInt(f.css("border-bottom"),10)),f.html(e),g.addClass("fileinput-exists").removeClass("fileinput-new"),g.trigger("change.bs.fileinput",c)},e.readAsDataURL(d)}else this.$element.find(".fileinput-filename").text(d.name),this.$preview.text(d.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")},c.prototype.clear=function(a){a&&a.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name","");if(b){var c=this.$input.clone(!0);this.$input.after(c),this.$input.remove(),this.$input=c}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),a!==undefined&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},c.prototype.reset=function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},c.prototype.trigger=function(a){this.$input.trigger("click"),a.preventDefault()};var d=a.fn.fileinput;a.fn.fileinput=function(b){return this.each(function(){var d=a(this),e=d.data("bs.fileinput");e||d.data("bs.fileinput",e=new c(this,b)),typeof b=="string"&&e[b]()})},a.fn.fileinput.Constructor=c,a.fn.fileinput.noConflict=function(){return a.fn.fileinput=d,this},a(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(b){var c=a(this);if(c.data("bs.fileinput"))return;c.fileinput(c.data());var d=a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');d.length>0&&(b.preventDefault(),d.trigger("click.bs.fileinput"))})}(window.jQuery)
