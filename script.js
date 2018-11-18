const backgroundImg = document.getElementById("background-image")
const backgroundArray = ['imgs/background-image.png', 'imgs/img1.jpg', 'imgs/img2.jpg', 'imgs/img3.jpg',  'imgs/portfolio.jpg'];

i = 0;

setInterval(() => {
  backgroundImg.style.backgroundImage = `url(${backgroundArray[++i % 5]})`
}, 3000)

$(document).ready(function(){
  let scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  // Active link switching
  $(window).scroll(function(){
    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function(){
        let sectionOffset = $(this.hash).offset().top - 5;

    if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

})

$("form#contact-form").on("submit", function () {
  let subject = $('#mailSubject').val();
  let message = $('#mailMessage').val()
  window.open("mailto:karmadrukpa11@gmail.com?subject=" + subject + "&body=" + message);
})