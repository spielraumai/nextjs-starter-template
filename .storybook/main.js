const path = require('path');

module.exports = {
  stories: [
    // Paths to the story files
    '../src/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
