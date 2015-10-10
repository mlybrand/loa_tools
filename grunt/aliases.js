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
        'open:dev',
        'stop:dev'
    ]
};
