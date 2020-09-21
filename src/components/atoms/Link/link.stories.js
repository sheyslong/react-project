import React from 'react';
import Link from './index';

export default {
  title: 'Link Atom Component',
  component: Link,
};

export const ToStorybookLink = () => <Link>Vazio</Link>;

ToStorybookLink.story = {
  name: 'Link Default',
};

export const ToStorybookLinkHref = () => <Link href="https://github.com/MeEscolhe/me-escolhe-gui">Github</Link>;

ToStorybookLinkHref.story = {
  name: 'Link Href',
};

export const ToStorybookLinkTarget = () => <Link href="https://github.com/MeEscolhe/me-escolhe-gui" target="_blank">Target</Link>;

ToStorybookLinkTarget.story = {
  name: 'Link Target',
};