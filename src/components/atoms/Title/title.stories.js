import React from 'react';
import Title from './index';

export default {
  title: 'Title Atom Component',
  component: Title,
};

export const ToStorybookTitle = () => <Title>Title</Title>;

ToStorybookTitle.story = {
  name: 'Title Default H1',
};

export const ToStorybookTitleH2 = () => <Title level={2}>Title</Title>;

ToStorybookTitleH2.story = {
  name: 'Title H2',
};

export const ToStorybookTitleH3 = () => <Title level={3}>Title</Title>;

ToStorybookTitleH3.story = {
  name: 'Title H3',
};

export const ToStorybookTitleH4 = () => <Title level={4}>Title</Title>;

ToStorybookTitleH4.story = {
  name: 'Title H4',
};

export const ToStorybookTitleH5 = () => <Title level={5}>Title</Title>;

ToStorybookTitleH5.story = {
  name: 'Title H5',
};
