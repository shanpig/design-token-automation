module.exports = {
  source: ['tokens/**/*.json'],
  format: {
    // Define a custom format using our transformer
    figmaTokensPluginJson: (opts) => {
      const { dictionary } = opts;
      // Transform the tokens from the style dictionary instance
      const parsedTokens = transform(dictionary.tokens);
      // Turn the object into JSON, the "2" third param is used to format indents with 2 spaces
      return JSON.stringify(parsedTokens, null, 2);
    },
  },
  platforms: {
    css: {
      transformGroup: 'web',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transformGroup: 'web',
      buildPath: 'build/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    web: {
      transformGroup: 'web',
      buildPath: 'build/web/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
};
