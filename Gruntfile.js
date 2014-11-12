module.exports = function(grunt) {

  //Task configuration
  grunt.initConfig({

    //Clean directory before compilation
    clean: {
      build: {
        src: [ 'dev' ]
      },
    },

    //Copy current working files
    copy: {
      build: {
        cwd: 'src',
        src: [ '**', '!**/*.scss' ],
        dest: 'dev',
        expand: true
      },
    },

    //SASS CSS Preprocessor
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: [{                         // Dictionary of files
          'dev/css/*.css': '*.scss',      // 'destination': 'source'
          dest: 'dev',
          ext: '.css'
        }]
      },
    },

    //Automate vendor prefixes
    autoprefixer: {
      build: {
        expand: true,
        cwd: 'dev',
        src: [ '**/*.css' ],
        dest: 'dev'
      }
    },

    //Local development server
    connect: {
      server: {
        options: {
          port: 4000,
          base: 'dev',                 //Preview directory
          hostname: '*'
        }
      }
    }

  });


  //Load dependencies
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');



  /* =========== Register tasks =========== */

  //Developer mode
  grunt.registerTask(
    'css',
    'Watch files, clean, compile and preview on changes',
    ['sass', 'autoprefixer']
  );


  //Export
  grunt.registerTask(
    'export',
    'Minifies and concatenates CSS/JS, compiles images to export directory',
    ['task', 'task', 'task']
  );

  //Developer mode
  grunt.registerTask(
    'dev',
    'Watch files, clean, compile and preview on changes',
    ['clean:dev', 'copy', 'css', 'watch']
  );

};
