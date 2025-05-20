import Fastify from 'fastify';

const pinoSettings = {
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss Z',
      ignore: 'pid,hostname',
    },
  },
};

const envToLogger = {
  development: pinoSettings,
  staging: pinoSettings,
  production: true,
  test: false,
};

const fastify = Fastify({
  logger: envToLogger[process.env.NODE_ENV as keyof typeof envToLogger] ?? true,
});

fastify.get('/', function (_request, reply) {
  reply.send({ hello: 'world' });
});

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
