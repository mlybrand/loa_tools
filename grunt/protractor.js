module.exports = {
    options: {
        noColor: false,
        args: {}
    },
    e2e: {
        options: {
            configFile: 'test/config/protractor/e2e.conf.js',
            keepAlive: false
        }
    },
    continuous: {
        options: {
            configFile: 'test/config/protractor/continuous.conf.js',
            keepAlive: true
        }
    }
};
