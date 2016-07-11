module.exports = function(config) {
	return function(style) {

		style
			.include(__dirname)
			.import("src/settings/namespace.styl")
			.import("src/utility/*")
		;

		if(typeof config === "string")
		{
			style.import(config);
		}

		style
			.include(__dirname)
			.import("src/index.styl")
		;
	};
};
