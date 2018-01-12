define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    //var mail = require('./mail');
    var mail = require('Mail');

    let sss = new mail();

    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');
    console.log("this is name = ", mail)
    //mail.getName();
});
