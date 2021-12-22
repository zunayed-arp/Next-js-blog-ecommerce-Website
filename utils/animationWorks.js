import axios from "axios";
// import Confetti from "react-confetti/dist/types/Confetti";

export const formatCurrency = (amount = 0, currency = 'USD') =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
		minimumIntegerDigits: 2,
	}).format(amount / 100);

export const isClient = typeof window === 'object';

export const fetcher = url => axios.get(url).then(res => res.data);

// export const shootFireworks = () => {
// 	const duration = 15 * 1000;
// 	const animationEnd = Date.now() + duration;
// 	const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

// 	function randomInRange(min, max) {
// 		return Math.random() * (max - min) + min;
// 	}

// 	const interval = setInterval(function () {
// 		const timeLeft = animationEnd - Date.now();

// 		if (timeLeft <= 0) {
// 			return clearInterval(interval);
// 		}

// 		const particleCount = 50 * (timeLeft / duration);
// 		// since particles fall down, start a bit higher than random
// 		confetti(
// 			Object.assign({}, defaults, {
// 				particleCount,
// 				origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
// 			})
// 		);
// 		confetti(
// 			Object.assign({}, defaults, {
// 				particleCount,
// 				origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
// 			})
// 		);
// 	}, 250);
// };















// export const formatCurrency = (amount = 0, currency = 'USD') => new Int.NumberFormat('en-US', {
// 	style: 'currency',
// 	currency,
// 	minimumIntegerDigits: 2,
// }).format(amount / 100);


// export const isClient = typeof window === 'object';


// export const fetcher = url => axios.get(url).then(res => res.data)


// export const shootFireWorks = () => {
// 	const duration = 15 * 1000;
// 	const animationEnd = Date.now() + duration;
// 	const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

// 	function randomInRange(min, max) {
// 		return Math.random() * (max - min) + min;
// 	}

// 	const interval = setInterval(function () {
// 		const timeLeft = animationEnd - Date.now();
// 		if (timeLeft <= 0) {
// 			return clearInterval(interval);
// 		}

// 		const particleCount = 50 * (timeLeft / duration);

// 		Confetti(Object.assign({}, defaults, {
// 			particleCount, origin: { x: randomInRange(0, 2, 0.4), y: Math.random() - 0.2 },
// 		}));
// 	}, 250);


// };