import * as path from 'path';

import {baseConfig} from './base.config';

module.exports = {
  ...baseConfig,
  mode: 'production',
  entry: {
    magentamusic: './src/lib.ts',
  },
  output:
      {filename: 'magentamusic.js', path: path.resolve(__dirname, '../dist')},
  optimization: {minimize: true},
};
