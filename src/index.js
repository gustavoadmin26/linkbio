export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/config.js') {
      const config = {
        APPLY_URL: env.APPLY_URL || '',
        MENTORIA_URL: env.MENTORIA_URL || '',
        METODO_URL: env.METODO_URL || '',
        PALESTRAS_URL: env.PALESTRAS_URL || ''
      };

      return new Response(`window.LINKBIO_CONFIG=${JSON.stringify(config)};`, {
        headers: {
          'content-type': 'application/javascript; charset=utf-8',
          'cache-control': 'no-store'
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
