import { Config } from '@stencil/core'

export const config: Config = {

  outputTargets: [
    {
      type: 'www',
    }
  ]

};

export const devServer = {
  root: 'www',
  watchGlob: '**/**'
};