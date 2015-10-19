(function() {
    'use strict';

    var convict = require('convict'),
        config =  null,
        env = null;

    convict.addFormat({
        name: 'static-file-maps',
        validate: function(val) {
            if (Object.prototype.toString.call(val) !==
                    '[object Array]') {
                throw new Error('must be an array');
            }
            for (var i = 0, len = val.length; i < len; i ++) {
                if (typeof val !== 'object') {
                    throw new Error('must be an array of objects');
                }
                if (!val[i].filePath) {
                    throw new Error(
                        'each object must have a filePath property');
                }
                if (typeof val[i].filePath !== 'string') {
                    throw new Error('filePath must be a string');
                }
                // no test for val.directoryName as it can be null
            }
        }
    });

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
        },
        staticFileMaps: {
            doc: 'Array of objects { filePath:"directoryName" }',
            format: 'static-file-maps',
            default: [{filePath: 'public', directoryName: null}]
        }
    });
    env = config.get('env');

    config.loadFile(__dirname + '/config/' + env + '.json');
    config.validate({strict: true});

    module.exports = config;
}());
