module.exports = {
    'default': [
        'jshint',
        'jscs',
        'test:e2e'
    ],
    'travis': [
        'jshint',
        'jscs'
    ],
    'dev': [
        'default'
    ],
    'test:e2e': [
        'run:dev',
        'protractor:e2e',
        'stop:dev'
    ]
};
