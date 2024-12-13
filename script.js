const overlay = document.querySelector('#overlay')
const burgerBtn = document.querySelector('#burger')
const overlayInactiveClass = 'overlay--inactive'

function overlayClose() {
	overlay.classList.add(overlayInactiveClass)
	console.log('Overlay closed')
}

function overlayOpen() {
	overlay.classList.remove(overlayInactiveClass)
	burgerBtn.classList.add('burger--close')
	console.log('Overlay openned')
}

burgerBtn.addEventListener('click', () => {
	if (!overlay.classList.contains(overlayInactiveClass)) {
		overlayClose()
	} else {
		overlayOpen()
	}
})

document.addEventListener('keydown', (event) => {
	if (!overlay.classList.contains(overlayInactiveClass)) {
		if (event.key === 'Escape') {
			overlayClose()
		}
	}
})


//

let itemMain
const oldParent = document.querySelector('.combinations__list')
const newParent = document.querySelector('.combinations')

let flag = false

function changeParent() {
	if (window.innerWidth <= 767 && !flag) {
		itemMain = document.querySelector('.combinations__item--main')
		itemMain.remove()
		newParent.insertAdjacentHTML('afterbegin', itemMain.outerHTML)
		flag = true
	} else if (window.innerWidth > 767 && flag) {
		itemMain = document.querySelector('.combinations__item--main')
		itemMain.remove()
		oldParent.insertAdjacentHTML('afterbegin', itemMain.outerHTML)
		flag = false
	}
}

changeParent()
window.addEventListener('resize', changeParent)


// Отображение тултипов

const tooltipInnerArray = document.querySelectorAll('.tooltip__inner');
const tooltipArray = document.querySelectorAll('.tooltip');
const visuallyHiddenClass = 'visually-hidden'


tooltipArray.forEach((element, index) => {
	element.addEventListener('click', () => {
		const tooltipInner = element.querySelector('.tooltip__inner')
		if (tooltipInner.classList.contains(visuallyHiddenClass)) {
			closeAllTooltips(tooltipInnerArray)
			element.classList.add('tooltip--active')
			openTooltip(tooltipInner)

		} else {
			element.classList.remove('tooltip--active')
			closeTooltip(tooltipInner)
		}
	})
});

function openTooltip(element) {
	element.classList.remove(visuallyHiddenClass)
}

function closeTooltip(element) {
	element.classList.add(visuallyHiddenClass)
}

function closeAllTooltips(array) {
	array.forEach(element => {
		element.classList.add(visuallyHiddenClass)
		tooltipArray.forEach(element => {
			element.classList.remove('tooltip--active')
		});
	})
}





