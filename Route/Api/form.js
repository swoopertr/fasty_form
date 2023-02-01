

let formController = (fastify, options) => {
    
    fastify.get('/form/forms', (req, res) => { 
        res.code(200).send({page: "getAllForms"});
      return;
    });

    fastify.get('/form/:formid', (req, res) => { 
        res.code(200).send({
            page: "formPage",
            formId: req.params.formid
        });
      return;
    });

};
module.exports  = formController;