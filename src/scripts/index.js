import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

let sliderButtonToggleState = false

function applyGlobalTheme(styleId) {
	const themeStyleClass = `${styleId}`
	const themeContainerElement = document.querySelector("#theme-container")

	if (themeContainerElement) {
		themeContainerElement.className = ""
		themeContainerElement.classList.add(themeStyleClass)
	}
}

function applyThemeAccordingToCardTarget(event, cardElements) {
	const classToApply = 'sig-card--active'
	const elemToApplyClass = event.currentTarget
	cardElements.forEach(card => card.classList.remove(classToApply))
	elemToApplyClass.classList.add(classToApply)
	applyGlobalTheme(event.currentTarget.id)
}

function toggleSliderButtonTextColor(type) {
	const monthlyText = document.querySelector(".sig-options__slider-text-monthly")
	const annuallyText = document.querySelector(".sig-options__slider-text-annually")
	const colorClass = 'sig-options__slider-text-color'
	const noColorClass = 'sig-options__slider-text-no-color'
	
	if (type === 'annually' && monthlyText) {	
		monthlyText.classList.add(colorClass)
	} else {
		monthlyText.classList.remove(colorClass)
	}

	if (type === 'monthly' && annuallyText) {	
		annuallyText.classList.remove(noColorClass)
	} else {
		annuallyText.classList.add(noColorClass)
	}
}

function applyBillingOptionsLabels(type) {
	const monthlyLabel = 'per month'
	const annuallyLabel = 'yearly'
	const priceElementLabels = document.querySelectorAll(".sig-card__price-label")

	priceElementLabels.forEach(node => {
		node.innerText = type === 'monthly' ? monthlyLabel : annuallyLabel
	})
}

function applyNewPrice(type) {
	const teamPriceElement = document.querySelector(".sig-card__price--team")
	const tribePriceElement = document.querySelector(".sig-card__price--tribe")
	const annuallyPriceTeam = '$299.99'
	const monthlyPriceTeam = '$29.99'
	const annuallyPriceTribe = '$999.99'
	const monthlyPriceTribe = '$149.99'
	
	if (type === 'monthly') {
		teamPriceElement.innerText = monthlyPriceTeam
		tribePriceElement.innerText = monthlyPriceTribe
		applyBillingOptionsLabels(type)
	}

	if (type === 'annually') {
		teamPriceElement.innerText = annuallyPriceTeam
		tribePriceElement.innerText = annuallyPriceTribe
		applyBillingOptionsLabels(type)
	}
}

function toggleBillingOptions(sliderButtonElement) {
	const shiftButtonLeftClass = 'sig-options__slider-button--right'
	const elemToApplyClass = sliderButtonElement
	
	sliderButtonToggleState = !sliderButtonToggleState
	
	if (sliderButtonToggleState) {
		elemToApplyClass.classList.add(shiftButtonLeftClass)
		toggleSliderButtonTextColor('annually')
		applyNewPrice('annually')
	} else {
		elemToApplyClass.classList.remove(shiftButtonLeftClass)
		toggleSliderButtonTextColor('monthly')
		applyNewPrice('monthly')
	}
}

function run() {
	const cardElements = document.querySelectorAll(".sig-card")
	const sliderButtonElement = document.querySelector("#slider-button-billing-option")

	if (sliderButtonElement) {
		sliderButtonElement.addEventListener('click', function(e) {
			toggleBillingOptions(sliderButtonElement)
		});
	}

	if (cardElements) {
		cardElements.forEach(card => card.addEventListener('click', function(e) {
			applyThemeAccordingToCardTarget(e, cardElements)
		}));
	}
}


run()
