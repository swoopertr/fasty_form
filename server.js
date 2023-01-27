const fastify = require('fastify')({
  logger: false
})

fastify.get('/', async (request, reply) => {
    reply.code(200).header("myhead", "1234").send({status: "ok"});
  return;// { hello: 'world' }
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host:"0.0.0.0" })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();