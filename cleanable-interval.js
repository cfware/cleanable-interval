export default function cleanableInterval(fn, delay, ...args) {
	const handle = setInterval(fn, delay, ...args);

	return () => clearInterval(handle);
}
