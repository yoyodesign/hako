const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const path = require("path");
const hako = require("../");
const child = require("child_process");
const gutil = require("gulp-util");
const browserSync = require("browser-sync").create();
const package = require("./package.json");

const srcRoot = `_app/`;
const destRoot = `_site/`;
const paths = {
	cssSrc: `${srcRoot}stylus/style*.styl`,
	cssDest: `${destRoot}assets/css`
};

const plumberOpts = {
	errorHandler(error) {
		console.log(error.message);
		this.emit(`end`);
	}
};

const createCssTask = (watch) => {
	console.log("Created CSS");
	return () => {
		return gulp
			.src(paths.cssSrc)
			.pipe(plugins.plumber(plumberOpts))
			.pipe(plugins.stylus({
				compress: !watch,
				use: [
					hako("settings/hako/*")
				]
			}))
			.pipe(plugins.autoprefixer({
				browsers: ["last 3 versions"]
			}))
			.pipe(gulp.dest("assets/css"))
			.pipe(browserSync.stream())
		;
	};
};

gulp.task("jekyll", () => {
   const jekyll = child.spawn("jekyll.bat", ["build",
     "--watch",
     "--incremental",
     "--drafts",
	 "--config",
	 "_config.yml,_app/localhost_config.yml"
   ]);
  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log("Jekyll: " + message));
  };

  jekyll.stdout.on("data", jekyllLogger);
  jekyll.stderr.on("data", jekyllLogger);
});

gulp.task("jekyllWatch", ["jekyll"], () => {
	browserSync.reload();
})

gulp.task("serve", () => {
  browserSync.init({
    files: [`${destRoot}/**`],
    port: 4000,
    server: {
      baseDir: destRoot
	},
	open: false
  });

  // Watch stylus files
  gulp.watch(`${srcRoot}stylus/**/*.styl`, ["cssWatch"]);

  // Watch Jekyll posts
  gulp.watch(`_posts/**/*.+(md|markdown|MD)`, ["jekyllWatch"]);

  // Watch docs collection
  gulp.watch(`_docs/**/*.+(md|markdown|MD)`, ["jekyllWatch"]);

  // Watch Jekyll html files
  gulp.watch(["**/*.html", "!_site/**/*.*"], ["jekyllWatch"]);
});

gulp.task("css", createCssTask());
gulp.task("cssWatch", createCssTask(true));

gulp.task("default", ["css", "jekyll"]);
gulp.task("watch", ["cssWatch", "jekyll","serve"]);
