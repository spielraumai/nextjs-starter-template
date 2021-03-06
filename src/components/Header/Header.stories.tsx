import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = () => <Header />;

export const Primary = Template.bind({});
