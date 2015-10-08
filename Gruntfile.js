module.exports = function (grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        dist: {
  			  options: {
  				  compress: true
          },
          files: {
            'calc-pattern/**.min.js': [ "calc-pattern/**/*.js" , "!calc-pattern/**/*.min.js"]
          }
       }
    },
    coveralls: {
        options: {
            debug: true,
            coverageDir: '/',
            dryRun: true,
            force: true,
            recursive: true
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma-coveralls');

  grunt.registerTask('default', ['uglify','coveralls']);
  
};
