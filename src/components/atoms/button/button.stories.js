import React from 'react';
import Button from './index';

export default {
  title: 'Button Atom Component',
  component: Button,
};

export const ToStorybookButton = () => <>
                                        <Button type="primary">Primary</Button>
                                        </>;

ToStorybookButton.story = {
  name: 'Button Type',
};
