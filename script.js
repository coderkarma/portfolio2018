$(document).ready(function () {

   let scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  // Active link switching
  $(window).scroll(function () {
    let  scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      let  sectionOffset = $(this.hash).offset().top - 10;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

})

$("#mailSend").click(function () {
  let subject = $('#mailSubject').val();
  let message = $('#mailMessage').val()
  window.open("mailto:karmadrukpa11@gmail.com?subject=" + subject + "&body=" + message);
})