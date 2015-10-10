module.exports = {
    'default': [
        'jshint',
        'jscs',
        'hello'
    ],
    'dev': [
        'default'
    ],
    'trial_run': [
        'run:dev',
        'protractor:e2e',
        'stop:dev'
    ]
};
