// Jest does not provide a browser fetch implementation by default in this setup.
if (typeof fetch === 'undefined') {
  global.fetch = (..._args) =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ content: '', encoding: 'base64' }),
    });
}
