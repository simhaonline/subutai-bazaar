
var bazaar = require("../subutai-bazaar");

var argv = process.argv.slice(2);

var bazaarConnection = bazaar.getConnection({
    network: "prod", 
    email: argv[0],
    password: argv[1]
})

bazaarConnection.getEnvironments(function (err, result) {
    if (err) {
        console.error("Error: %j", err);
    } else {
        result.forEach(function (env) {
            console.log("%s %s", env.environment_id, env.environment_name);
        })
    }
})
