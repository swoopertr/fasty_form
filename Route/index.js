let homeController = require('./Api/home');
let formController = require('./Api/form');

 let routeBuilder = {
    
        build : async function (fastify, options) {
            homeController(fastify);
            formController(fastify);
        }

    };
 
module.exports = routeBuilder;