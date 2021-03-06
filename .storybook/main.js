module.exports = {
  stories: [
    // Paths to the story files
    '../src/components/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: { postcssLoaderOptions: { implementation: require('postcss') } },
    },
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
