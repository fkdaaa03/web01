$(function() {

  /* slideShow */
  $('#next').click(function() {
    $('#slideShow .slide:not(:animated)').animate({'margin-left': -1*$('#slideShow .slide li').width()}, 500, function() {
      $('#slideShow .slide').append($('#slideShow .slide li:first-child'));
      $('#slideShow .slide').css('margin-left', '0');
    });
  });
  $('#prev').click(function() {
    $('#slideShow .slide:not(:animated)').prepend($('#slideShow .slide li:last-child'));
    $('#slideShow .slide').css('margin-left', -1*$('#slideShow .slide li').width());
    $('#slideShow .slide').animate({'margin-left': '0'}, 500);
  });

  /* Gallery */
  $('.full_back, .full_container').hide();
  $('.gallery_list li').click(function() {
    let list_id = $(this).attr('id');

    let list_cap = $(this).find('figcaption').html();

    $('.full_container figure img').attr('src', 'images/bg/' + list_id + '.jpg');
    $('.full_container figure figcaption').html(list_cap);
    $('.full_back, .full_container').fadeIn();
  });
  $('.full_back, .full_container a').click(function() {
    $('.full_back, .full_container').fadeOut();
    return false;
  });
  
  /* #pageUp */
  $('#pageUp').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() >100) {
      $('#pageUp').fadeIn();
    } else {
      $('#pageUp').fadeOut();
    }
  });
});