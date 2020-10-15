import React from 'react';
import Label from './index';

export default {
  title: 'Label Atom Component',
  component: Label,
};

export const ToStorybookLabel = () => <Label>Label</Label>;

ToStorybookLabel.story = {
  name: 'Label Default',
};

export const ToStorybookLabelSecundary = () => <Label type="secondary">Secundary</Label>;

ToStorybookLabelSecundary.story = {
  name: 'Label Secundary',
};

export const ToStorybookLabelSuccess = () => <Label type="success">Success</Label>;

ToStorybookLabelSuccess.story = {
  name: 'Label Success',
};

export const ToStorybookLabelWarning = () => <Label type="warning">Warning</Label>;

ToStorybookLabelWarning.story = {
  name: 'Label Warning',
};

export const ToStorybookLabelDanger = () => <Label type="danger">Danger</Label>;

ToStorybookLabelDanger.story = {
  name: 'Label Danger',
};

export const ToStorybookLabelDisable = () => <Label disabled>Disable</Label>;

ToStorybookLabelDisable.story = {
  name: 'Label Disable',
};

export const ToStorybookLabelStrong = () => <Label strong>Strong</Label>;

ToStorybookLabelStrong.story = {
  name: 'Label Strong',
};
