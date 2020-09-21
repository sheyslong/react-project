import React from 'react';
import Button from './index';

export default {
  title: 'Button Atom Component',
  component: Button,
};

export const ToStorybookButton = () => <>
                                        <Button type="primary">Primary</Button>
                                        <Button type="dashed">Dashed</Button>
                                        <Button type="text">Text</Button>
                                        <Button type="link">Link</Button>
                                        </>;

ToStorybookButton.story = {
  name: 'Button Type',
};
