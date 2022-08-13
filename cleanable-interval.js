export default (callback, delay, ...args) => {
	const handle = setInterval(callback, delay, ...args);

	return () => clearInterval(handle);
};
