import fastify from 'fastify';

export function createServer() {
  const app = fastify({ logger: true });

  app.get('/', async () => ({ ok: true, service: 'xenova-engine' }));

  app.get('/health', async () => ({ status: 'ok' }));

  return app;
}

export default createServer;
