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
            },
            {
                cwd: 'bower_components/angular-route',
                src: ['angular-route.js'],
                dest: 'dist/public/js',
                filter: 'isFile',
                expand: true
            },
            {
                cwd: 'src/client',
                src: ['**/*.js'],
                dest: 'dist/public/js',
                filter: 'isFile',
                expand: true,
                flatten: true
            },
            {
                cwd: 'src/client/html',
                src: ['**'],
                dest: 'dist/public/html',
                filter: 'isFile',
                expand: true
            }
        ]
    }
};
