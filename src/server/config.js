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
    convict.addFormat({
        name: 'main-view',
        validate: function(val) {
            if (typeof val !== 'string') {
                throw new Error('Main View name must be a string');
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
            doc: 'The application port',
            format: 'port',
            default: 3000,
            env: 'PORT'
        },
        mainView: {
            doc: 'The main view name',
            format: 'main-view',
            default: 'index'
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
