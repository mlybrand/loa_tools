module.exports = {
    unit: {
        configFile: 'test/client/config/karma/karma-unit.conf.js',
        singleRun: true
    },
    ci: {
        configFile: 'test/client/config/karma/karma-ci.conf.js',
        singleRun: true
    },
    continuous: {
        configFile: 'test/client/config/karma/karma-continuous.conf.js',
        singleRun: false
    }
};
