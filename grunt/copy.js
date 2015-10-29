module.exports = {
    main: {
        files: [
            {
                cwd: 'src/server',
                src: ['**', '!sass/*'],
                dest: 'dist',
                filter: 'isFile',
                expand: true
            },
            {
                cwd: 'bower_components/angular',
                src: ['angular.js'],
                dest: 'dist/public/js',
                filter: 'isFile',
                expand: true
            }
        ]
    }
};
