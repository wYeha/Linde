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

