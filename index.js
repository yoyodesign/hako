module.exports = function(config) {
	return function(style) {
		style
			.include(__dirname)
			.import("hako/settings/namespace.styl")
			.import("hako/utility/*")
		;

		if(typeof config === "string") {
			style.import(config);
		}

		style
			.include(__dirname)
			.import("hako/index.styl")
		;
	};
};
