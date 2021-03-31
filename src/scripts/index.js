import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

let sliderButtonToggleState = false

function applyThemeAccordingToCardTarget(event, cardElements) {
	const classToApply = 'sig-card--active'
	const elemToApplyClass = event.currentTarget
	cardElements.forEach(card => card.classList.remove(classToApply))
	elemToApplyClass.classList.add(classToApply)
	
	//Also write some code which allows for ONE scss var to change, which then transforms
	//everywhere 
}

function toggleSliderButtonTextColor(type) {
	const monthlyText = document.querySelector(".sig-options__slider-text-monthly")
	const annuallyText = document.querySelector(".sig-options__slider-text-annually")
	
	if (type === 'monthly') {
		monthlyText.style.color = "red"
		annuallyText.style.color = "#fff"
	} 
	if (type === 'annually') {
		monthlyText.style.color = "#fff"
		annuallyText.style.color = "red"
	}
}

function toggleBillingOptions(sliderButtonElement) {
	const shiftButtonLeftClass = 'sig-options__slider-button--right'
	const elemToApplyClass = sliderButtonElement
	
	sliderButtonToggleState = !sliderButtonToggleState
	
	if (sliderButtonToggleState) {
		elemToApplyClass.classList.add(shiftButtonLeftClass)
		toggleSliderButtonTextColor('monthly')
	} else {
		elemToApplyClass.classList.remove(shiftButtonLeftClass)
		toggleSliderButtonTextColor('annually')
	}
}


function run() {
	const cardElements = document.querySelectorAll(".sig-card")
	const sliderButtonElement = document.querySelector("#slider-button-billing-option")

	sliderButtonElement.addEventListener('click', function(e) {
		toggleBillingOptions(sliderButtonElement)
	});

	cardElements.forEach(card => card.addEventListener('click', function(e) {
		applyThemeAccordingToCardTarget(e, cardElements)
	}));
}


run()
