const path = require('path');

module.exports = {
  rollup(config, options) {
    if (options.target === 'browser') {
      config.input = config.input.replace('index.ts', 'index-browser.ts');

      config.output.file = config.output.file
        .replace('dist', 'dist-browser')
        .replace('.esm', '')
        .replace('.umd', '');

      config.output.globals = {
        ...config.output.globals,
        [path.resolve(__dirname, 'src/text-encoder.ts')]: 'TextEncoder',
        [path.resolve(__dirname, 'src/text-decoder.ts')]: 'TextDecoder',
      }

      console.log(config.output);

      return config;
    }

    return config;
  },
};
