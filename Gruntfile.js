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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
  
};
