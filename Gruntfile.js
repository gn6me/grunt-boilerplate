module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js','js/libs/*.js']
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        concat: {
            js: {
                dist: {
                    src: ['js/libs/*.js']
                    dest: 'js/build/production.js',
                },

            },
        },

        uglify: {
            js: {
                build: {
                    src: 'js/build/production.js',
                    dest: 'js/production.min.js',
                },
            },
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/template.css': 'css/template.scss'
                }
            }
        },

        watch: {
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
            scripts: {
                files: ['js/libs/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jshint','concat', 'uglify', 'sass', 'watch']);

};