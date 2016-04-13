module.exports = function(grunt){

  // Configure main project settings
  grunt.initConfig({

      // Basic settings and info about our plugins
      pkg: grunt.file.readJSON('package.json'),

      uglify: {
        options: {
          manage: false
        },
      my_target: {
        files: {
          'js/app.min.js': ['js/app.js']
        }
      }
    },

      cssmin: {
        my_target: {
          files: [{
            expand: true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/',
            ext: '.min.css'
          }]
        }
      }

  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Execute task
  grunt.registerTask('default', ['cssmin', 'uglify']);

};
