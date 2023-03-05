export default {
  input: 'src/main.js',
  output: [
    {
      file: `dist/xhr-proxy.umd.js`,
      format: 'umd',
      name: 'ap',
    },
    {
      file: `dist/xhr-proxy.es.js`,
      format: 'es',
    },
    {
      file: `dist/xhr-proxy.cdn.js`,
      format: 'iife',
      name: 'ap',
      compact: true
    },
  ]
}