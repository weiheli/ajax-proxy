export default {
  input: 'src/main.js',
  output: [
    {
      file: `dist/ajax-proxy.umd.js`,
      format: 'umd',
      name: 'ap',
    },
    {
      file: `dist/ajax-proxy.es.js`,
      format: 'es',
    },
    {
      file: `dist/ajax-proxy.cdn.js`,
      format: 'iife',
      name: 'ap',
      compact: true
    },
  ]
}