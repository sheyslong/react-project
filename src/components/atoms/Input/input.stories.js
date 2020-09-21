import React from 'react';
import Input from './index';
import { UserOutlined } from '@ant-design/icons';

export default {
  title: 'Input Atom Component',
  component: Input,
};

export const ToStorybookInput = () => <Input />;

ToStorybookInput.story = {
  name: 'Input Default',
};


export const ToStorybookInputPlaceholder = () => <Input placeholder="placeholder"/>;

ToStorybookInputPlaceholder.story = {
  name: 'Input Placeholder',
};

export const ToStorybookInputLarge = () => <Input size="large" placeholder="large size" />;

ToStorybookInputLarge.story = {
  name: 'Input Large Size',
};

export const ToStorybookInputSmall = () => <Input size="small" placeholder="small size" />;

ToStorybookInputSmall.story = {
  name: 'Input Small Size',
};

export const ToStorybookInputPrefix = () => <Input placeholder="prefix" prefix={<UserOutlined />}/>;

ToStorybookInputPrefix.story = {
  name: 'Input Prefix',
};
 