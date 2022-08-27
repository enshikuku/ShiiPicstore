let questions = document.querySelectorAll('.openProfile')
let swipers = document.querySelectorAll('.swiper')

questions.forEach(question => {
    question.addEventListener('click', () => {
        let swiper = question.nextElementSibling
        if (swiper.style.display === 'none') {
            swipers.forEach(swiper => swiper.style.display = 'none')
            swiper.style.display = 'block'
        } else {
            swiper.style.display = 'none'
        }
    })
})

let load = document.querySelector('.loader')
window.addEventListener("load", function(){
    load.style.display = 'none'
})
mybutton = document.querySelector('#scrollTopBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}