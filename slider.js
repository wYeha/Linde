const slider = document.querySelector('.slider__container')
const btnNext = document.querySelector('#sliderNext')
const btnPrev = document.querySelector('#sliderPrev')


const slides = slider.querySelectorAll('.slider__slide')

let index = 0

let offset = 0
const gap = 24
const slideWidth = 344
const padding = 20

btnNext.addEventListener('click', () => {
	index++
	updateButtonState()
	if (index === 0) {
		btnPrev.disabled = true
	}
	offset -= slideWidth + gap
	slider.style.transform = `translateX(${offset}px)`
})

btnPrev.addEventListener('click', () => {
	index--
	updateButtonState()
	offset += slideWidth + gap
	slider.style.transform = `translateX(${offset}px)`
})

function updateButtonState() {
	btnPrev.disabled = index === 0
	btnNext.disabled = index === slides.length - 1
}

updateButtonState()