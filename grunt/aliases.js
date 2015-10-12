module.exports = {
    'default': [
        'jshint',
        'jscs',
        'test:e2e-single'
    ],
    'ci': [
        'jshint',
        'jscs',
        'test:e2e-ci'
    ],
    'dev': [
        'default'
    ],
    'test:e2e-single': [
        'run:dev',
        'protractor:e2e',
        'stop:dev'
    ],
    'test:e2e-ci': [
        'run:dev',
        'exec',
        'stop:dev'
    ],
    'test:e2e-continuous': [
        'run:dev',
        'protractor:continuous',
        'stop:dev'
    ]
};
