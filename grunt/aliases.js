module.exports = {
    'default': [
        'jshint',
        'jscs',
        'test:unit-server-single',
        'test:e2e-single'
    ],
    'ci': [
        'jshint',
        'jscs',
        'test:unit-server-ci',
        'test:e2e-ci'
    ],
    'dev': [
        'default'
    ],
    'test:unit-server-single': [
        'mochaTest'
    ],
    'test:unit-server-ci': [
        'mochaTest'
    ],
    'test:unit-server-continuous': [
        'mochaTest'
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
