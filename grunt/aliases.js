module.exports = {
    'default': [
        'jshint',
        'jscs',
        'test:unit-server-single',
        'test:unit-client-single',
        'test:e2e-single'
    ],
    'ci': [
        'jshint',
        'jscs',
        'test:unit-server-ci',
        'test:unit-client-ci',
        'test:e2e-ci'
    ],
    'dev': [
        'default'
    ],
    'test:unit-server-single': [
        'mochaTest:unit'
    ],
    'test:unit-server-ci': [
        'mochaTest:unit'
    ],
    'test:unit-server-continuous': [
        'mochaTest:unit'
    ],
    'test:unit-client-single': [
        'karma:unit'
    ],
    'test:unit-client-ci': [
        'karma:ci'
    ],
    'test:unit-client-continuous': [
        'karma:continuous'
    ],
    'test:api-single': [

    ],
    'test:api-ci': [

    ],
    'test:api-continuous': [

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
