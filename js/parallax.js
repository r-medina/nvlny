$(document).ready(function() {
  $('.videos').slick({
    lazyLoad: 'ondemand',
    onInit: function() {
      if ($('.videos').is(':visible')) {
        $('iframe').attr('src', function() {
          var src = $(this).data('src');
          $(this).removeAttr('data-src');
          return src;
        });
      }
    }
  });

  $('.flyers').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(window).on('resize', function() {
    if ($('iframe').first().attr('src') == undefined && $('.videos').is(':visible')) {
      $('iframe').first().attr('src', function() {
        var src =  $(this).data('src');
        $(this).removeAttr('data-src');
        return src;
      });
    }
  });

  $('#add-email').on('click', function(e) {
    var email = $('#email').val();

    var post = $.ajax({
      type: "POST",
      url: "http://nvlny.herokuapp.com?email=" + email
    })
    .always(function(data) {
      $('#email').val('thank you!');
      $(e.target).addClass('disabled');
    });

    post.send();
  });
});
