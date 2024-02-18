import path from 'path';
import module from 'module';
import __dirname from 'path';

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },
};
