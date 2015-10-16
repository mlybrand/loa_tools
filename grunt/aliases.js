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
    'test:unit-client-single': [

    ],
    'test:unit-client-ci': [

    ],
    'test:unit-client-continuous': [

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
