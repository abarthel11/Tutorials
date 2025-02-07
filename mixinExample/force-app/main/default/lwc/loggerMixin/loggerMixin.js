export function LoggerMixin(Base) {
	return class extends Base {
		log(message) {
			console.log(`LOG: ${message}`);
		}

		error(message) {
			console.error(`ERROR: ${message}`);
		}
	};
}
