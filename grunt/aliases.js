module.exports = {
    'default': [
        'jshint',
        'jscs',
        'test:e2e'
    ],
    'ci': [
        'jshint',
        'jscs',
        'test:e2e-ci'
    ],
    'dev': [
        'default'
    ],
    'test:e2e': [
        'run:dev',
        'protractor:e2e',
        'stop:dev'
    ],
    'test:e2e-ci': [
        'run:dev',
        'exec',
        'stop:dev'
    ],
    'test:continuous': [
        'run:dev',
        'protractor:continuous',
        'stop:dev'
    ]
};
