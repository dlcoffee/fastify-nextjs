const fastify = require('fastify')({
  logger: true,
})
const { add2 } = require('utils')

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    console.log('hi a', add2('a'))
    console.log('hi 2', add2(2))
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
