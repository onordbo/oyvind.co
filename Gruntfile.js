module.exports = function(grunt) {

  //Task configuration
  grunt.initConfig({

    copy: {
      build: {
        cwd: 'src',
        src: [ '**', '!**/*.scss' ],
        dest: 'build',
        expand: true
      },
    },

    clean: {
      build: {
        src: [ 'build' ]
      },
      css: {
        src: [ 'build/**/*.css' ]
      },
      scripts: {
        src: [ 'build/**/*.js' ]
      },
    },

    sass: {
      dist: {
        options:{
          style: 'expanded'
        },
        files: {
          'build/css/style.scss': 'src/css/style.scss'
        }
      }
    },

    autoprefixer: {
      build: {
        expand: true,
        cwd: 'build',
        src: [ '**/*.css' ],
        dest: 'build'
      }
    },

    watch: {
      css: {
        files: 'src/**/*.scss',
        tasks: [ 'stylesheets' ]
      },
      copy: {
        files: [ 'src/**', '!src/**/*.scss' ],
        tasks: [ 'copy' ]
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build',
          hostname: '*'
        }
      }
    }

  });

  //Load dependencies
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');


  //Register tasks


  //Build stack
  grunt.registerTask(
    'build',
    'Clean development directory, run CSS task',
    [ 'clean:build', 'copy', 'css' ]
  );

  //Stylesheet automation
  grunt.registerTask(
    'css',
    'Compile and autoprefix CSS',
    [ 'sass', 'autoprefixer' ]
  );

  //Developer mode
  grunt.registerTask(
    'default',
    'Developer mode, watches files and runs automation',
    [ 'build', 'connect', 'watch' ]
  );

}
