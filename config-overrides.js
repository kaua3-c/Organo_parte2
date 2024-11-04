const { override } = require('customize-cra');

module.exports = override((config) => {
  const sourceMapLoader = config.module.rules.find(
    (rule) =>
      rule.enforce === 'pre' &&
      rule.use &&
      rule.use.some((use) => use.loader.includes('source-map-loader'))
  );

  if (sourceMapLoader) {
    // Ignora os source maps para uuid
    sourceMapLoader.exclude = [/(node_modules|uuid)/];
  }

  return config;
});