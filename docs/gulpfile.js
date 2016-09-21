const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const path = require("path");
const hako = require("../");
const child = require('child_process');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();
const package = require("./package.json");

const srcRoot = `src/`;
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
	console.log("return");
	gulp.src(paths.cssSrc)
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
		.pipe(gulp.dest(paths.cssDest))
		.pipe(browserSync.reload({stream: true}))
	;
};

gulp.task("jekyll", () => {
   const jekyll = child.spawn("jekyll.bat", ["build",
     "--watch",
     "--incremental",
     "--drafts"
   ]);
  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log("Jekyll: " + message));
  };

  jekyll.stdout.on("data", jekyllLogger);
  jekyll.stderr.on("data", jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [`${destRoot}/**`],
    port: 4000,
    server: {
      baseDir: destRoot
    }
  });

  gulp.watch(`${srcRoot}stylus/**/*.styl`, ["cssWatch"]);
});

gulp.task("css", createCssTask());
gulp.task("cssWatch", createCssTask(true));

gulp.task("default", ["css", "jekyll"]);
gulp.task("watch", ["jekyll","serve"]);
