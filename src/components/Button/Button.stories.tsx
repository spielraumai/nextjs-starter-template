import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story = () => (
  <Button onClick={() => alert('clicked')} label={'label'}></Button>
);

export const Primary = Template.bind({});
