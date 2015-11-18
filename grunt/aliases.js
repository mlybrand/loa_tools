module.exports = {
    'default': [
        'nspAlert',
        'sass',
        'jshint',
        'jscs',
        'test:unit-server-single',
        'test:unit-client-single',
        'test:api-single',
        'test:e2e-single'
    ],
    'build': [
        'default',
        'clean',
        'copy'
    ],
    'ci': [
        'jshint',
        'jscs',
        'test:unit-server-ci',
        'test:unit-client-ci',
        'test:api-ci',
        'test:e2e-ci'
    ],
    'dev': [
        'concurrent:dev'
    ],
    'watch-tasks': [
        'sass',
        'jshint',
        'jscs',
        'test:unit-server-continuous',
        'test:unit-client-continuous',
        'test:api-continuous',
        'test:e2e-continuous'
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
        'mochaTest:api'
    ],
    'test:api-ci': [
        'mochaTest:api'
    ],
    'test:api-continuous': [
        'mochaTest:api'
    ],
    'test:e2e-single': [
        'run:test',
        'protractor:e2e',
        'stop:test'
    ],
    'test:e2e-ci': [
        'run:test',
        'exec',
        'stop:test'
    ],
    'test:e2e-continuous': [
        'run:test',
        'protractor:continuous',
        'stop:test'
    ]
};
