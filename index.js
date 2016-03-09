module.exports = function(config) {
	return function(style) {
		
		if(typeof config === "string")
		{
			style.import(config);
		}

		style
			.include(__dirname)
			.import("src/_index.styl")
		;
	};
};