/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            sitecss: {
                options: {
                    banner: ''
                },
                files: {
                    'Styles/styles.min.css': [
                        'Styles/plugins/slick.css',
                        'Styles/Main.css',
                        'Styles/CanvasMenu.css',
                        'Styles/Blog.css',
                        'Styles/Popular.css',
                        'Styles/About.css',
                        'Styles/Slick.custom.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    'Scripts/plugins/jquery-3.1.1.js',
                    'Scripts/plugins/slick.js',
                    'Scripts/Bootstrapper.js',
                    'Scripts/ViewPort.js',
                    'Scripts/Swipe.js',
                    'Scripts/FullPage.js',
                    'Scripts/Main.js',
                    'Scripts/InitPlugins.js'
                ],
                dest: 'Scripts/scripts.min.js'
            }
        }
    });
    grunt.registerTask('default', ['uglify', 'cssmin']);
};