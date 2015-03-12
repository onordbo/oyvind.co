//TODO: Add 'export mode' with cssmin, imagemin and uglify

module.exports = function(grunt) {

  //Measure time spent per task
  require('time-grunt')(grunt);

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
          style: 'compressed'
        },
        files: {
          'build/front.css': 'src/front.scss',
          'build/about/about.css': 'src/about/about.scss',
          'build/lava/lava.css': 'src/lava/lava.scss',
          'build/spotify/spotify.css': 'src/spotify/spotify.scss',
          'build/workflow/workflow.css': 'src/workflow/workflow.scss',
          'build/dated/dated.css': 'src/dated/dated.scss',
          'build/spotify/interface/interface.css': 'src/spotify/interface/interface.scss'
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
      options: {
        livereload: true,
      },
      css: {
        files: 'src/**/*.scss',
        tasks: [ 'css' ],
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
  grunt.loadNpmTasks('grunt-newer');

  //Register tasks

  //Stylesheet automation
  grunt.registerTask(
    'css',
    'Compile and autoprefix CSS',
    [ 'newer:sass', 'newer:autoprefixer' ]
  );

  //Build stack
  grunt.registerTask(
    'build',
    'Clean development directory, run CSS task',
    [ 'newer:clean:build', 'newer:copy', 'css' ]
  );

  //Developer mode
  grunt.registerTask(
    'default',
    'Developer mode, watches files and runs automation',
    [ 'build', 'connect', 'watch' ]
  );
}


