let homeController = require('./Api/home');

 let routeBuilder = {
    
        build : async function (fastify, options) {
            homeController(fastify);
        }
    };
 
module.exports = routeBuilder;



