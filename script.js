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


//////////////////////////////////////////////////////

function getTooltipCoordinates(element) {
	const rect = element.getBoundingClientRect();
	const parentRect = element.closest('section').getBoundingClientRect();

	return {
		left: rect.left - parentRect.left,
		top: rect.top - parentRect.top,
		width: rect.width,
		height: rect.height
	};
}

const tooltipInnerArray = document.querySelectorAll('.tooltip__inner');
const tooltipArray = document.querySelectorAll('.tooltip');
const visuallyHiddenClass = 'visually-hidden'

tooltipArray.forEach((element, index) => {
	element.addEventListener('mouseover', () => {
		const tooltipModal = element.querySelector('.tooltip__inner')
		closeAllTooltips(tooltipInnerArray)
		openTooltip(tooltipModal)
	})
});

function openTooltip(element) {
	if (element.classList.contains(visuallyHiddenClass)) {
		tooltipInnerArray.forEach(element => {
			const coordinates = getTooltipCoordinates(element)

			if (coordinates.left < 20) {
				element.style.left = `${0}%`
				element.style.setProperty('--left', '10px')
			}
		})
		element.classList.remove(visuallyHiddenClass)
	}
}

function closeAllTooltips(array) {
	array.forEach(element => {
		element.classList.add(visuallyHiddenClass)
	})
}

closeAllTooltips(tooltipInnerArray)





