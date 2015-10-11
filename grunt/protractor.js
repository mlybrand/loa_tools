module.exports = {
    options: {
        configFile: 'test/e2e.conf.js',
        noColor: false,
        args: {}
    },
    e2e: {
        options: {
            configFile: 'test/e2e.conf.js',
            keepAlive: false
        }
    },
    continuous: {
        options: {
            configFile: 'test/continuous.conf.js',
            keepAlive: true
        }
    }
};
