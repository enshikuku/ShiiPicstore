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