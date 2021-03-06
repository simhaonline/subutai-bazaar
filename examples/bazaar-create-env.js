
var bazaar = require("../subutai-bazaar");

var argv = process.argv.slice(2);

var bazaarConnection = bazaar.getConnection({
    network: "master",
    email: argv[0],
    password: argv[1],
    debug: true
})

bazaarConnection.createEnvironment({
    environmentName: "foo", 
    nodes: [{
            peerId: "744D04AEDEF1811210613E2197CD0B46C050EEDE", 
            resourceHostId: "9EADD7962582F7ACFB7A3352D88EF8E084CB4449",
            hostname: "h1", 
            templateName: "debian-stretch", 
            templateId: "QmQZMYoPx6uQcRREfQWUt9CKubhy8bka3NyB9hshSi8NKZ",
            quota: {
                containerSize: "SMALL"
            }
    }]
}, function (err, result) {
    if (err) {
        console.error("Error: %j", err);
    } else {
        console.log("%j", result);
    }
})
