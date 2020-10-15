import React from 'react'
import Loading from './index'

export default {
  title: 'Loading Molecule Component',
  component: Loading,
};

export const ToStorybookLoadingFull= () => <Loading />

ToStorybookLoadingFull.story = {
  name: 'Loading',
};