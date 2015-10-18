(function() {
    'use strict';

    var convict = require('convict'),
        config = convict({
            env: {
                doc: 'The application environment',
                format: ['development', 'production'],
                default: 'development',
                env: 'NODE_ENV'
            },
            port: {
                doc: '',
                format: 'port',
                default: 3000,
                env: 'PORT'
            }
        }),
        env = config.get('env');

    config.loadFile(__dirname + '/config/' + env + '.json');
    config.validate({strict: true});

    module.exports = config;
}());
