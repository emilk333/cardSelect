import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

function applyThemeAccordingToCardTarget(event, cardElements) {
	const classToApply = 'sig-card--active'
	const elemToApplyClass = event.currentTarget
	cardElements.forEach(card => card.classList.remove(classToApply))
	elemToApplyClass.classList.add(classToApply)
	
	//Also write some code which allows for ONE scss var to change, which then transforms
	//everywhere 
}

function handleClick(event, cardElements) {
	applyThemeAccordingToCardTarget(event, cardElements)
}


function run() {
	const cardElements = document.querySelectorAll(".sig-card")

	cardElements.forEach(card => card.addEventListener('click', function(e) {
		handleClick(e, cardElements)
	}));
}


run()
