define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    //var mail = require('./mail');
    var mail = require('Mail');

    let sss = new mail();


    let spliter = $('.content-cols');
    spliter.split({orientation:'vertical', limit:150, position:'300px'});
    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');
    console.log("this is name = ", mail)
    //mail.getName();
});
