// with load-grunt-config, I have not been able
// to get grunt-exec multi-task working
// right now only using it for running
// protractor on travis

module.exports = {
    exec: {
        cmd: 'protractor test/config/protractor/e2e.conf.js'
    }
};
