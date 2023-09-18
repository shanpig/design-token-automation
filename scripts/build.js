// build.ts
const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

registerTransforms(StyleDictionary);

const myStyleDictionary = StyleDictionary.extend({
  source: ['../tokens/tokens-transformed.json'],
  platforms: {
    css: {
      transforms: [
        'ts/descriptionToComment',
        'ts/size/px',
        'ts/typography/fontWeight',
        'ts/resolveMath',
        'ts/size/css/letterspacing',
        'ts/typography/css/fontFamily',
        'ts/typography/css/shorthand',
        'ts/border/css/shorthand',
        'ts/shadow/css/shorthand',
        'ts/color/modifiers',
        'name/cti/kebab',
        'ts/shadow/css/shorthand',
        'ts/typography/css/shorthand',
      ],
      buildPath: 'src/app/constants/',
      files: [
        {
          destination: 'theme.json',
          format: 'json/nested',
          options: {
            outputReferences: false,
          },
        },
      ],
    },
  },
});

myStyleDictionary.buildAllPlatforms();
