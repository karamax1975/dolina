var gulp = require("gulp"),
    sass = require("gulp-sass"),
    
    browserSync = require('browser-sync').create();

    gulp.task("sass", function(done){
        return gulp.src("app/sass/**/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.reload({stream:true}));
        done();
    });
    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });
    });
    gulp.task("watch", function(){
        gulp.watch("app/sass/**/*.sass", gulp.series('sass'));
        
    });
   