module.exports = {
    dev: {
        script: 'src/server/server.js',
        options: {
            env: {
                NODE_ENV: 'development',
                PORT: '5455'
            }
        }
    }
};
