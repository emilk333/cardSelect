import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}


function run() {
	
	function handleClick() {
		console.log("123")
	}

	const cardElement = document.querySelectorAll(".sig-card")

	cardElement.forEach(card => card.addEventListener('click', handleClick));
}


run()
