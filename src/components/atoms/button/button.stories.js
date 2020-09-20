import React from 'react';
import Button from './index';

export default {
  title: 'Button Atom Component',
  component: Button,
};

export const ToStorybookButton = () => <Button type="primary">Primary</Button>;

ToStorybookButton.story = {
  name: 'Button Default',
};

export const ToStorybookButton2 = () => <Button type="danger">Primary</Button>;

ToStorybookButton2.story = {
  name: 'Button Default 2',
};
