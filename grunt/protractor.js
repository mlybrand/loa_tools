module.exports = {
    options: {
        noColor: false,
        args: {}
    },
    e2e: {
        options: {
            configFile: 'test/config/e2e.conf.js',
            keepAlive: false
        }
    },
    continuous: {
        options: {
            configFile: 'test/config/continuous.conf.js',
            keepAlive: true
        }
    }
};
