import webpack from 'webpack';
import webpackConfig from './webpack.server.config';
import process from 'process';

webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toString());
    process.exit(1);
  }
  console.log('Server bundle built successfully!');
});
