const fastify = require('fastify')({
  logger: false
});

fastify.register(require('./Route/index').build);

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host:"0.0.0.0" })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();