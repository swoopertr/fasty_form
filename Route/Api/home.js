let homeController = (fastify, options) => {
    
    fastify.get('/', (req, res) => { 
        res.code(200).send({status: "active"});
      return;
    });

};
module.exports  = homeController;