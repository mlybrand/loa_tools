module.exports = {
    options: {
        configFile: 'test/e2e.conf.js',
        noColor: false,
        args: {}
    },
    e2e: {
        options: {
            keepAlive: false
        }
    },
    continuous: {
        options: {
            keepAlive: true
        }
    }
};
