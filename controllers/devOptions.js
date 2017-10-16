import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpacHotkMiddleware from 'webpack-hot-middleware';
import devConfig from '../build/webpack.dev.config';

export default (app) => {
    if (process.env.NODE_ENV === 'development') {
        const compiler = webpack(devConfig);
        app.use(webpackMiddleware(compiler, {
            hot: true,
            publicPath: devConfig.output.publicPath,
            noInfo: true,
        }));
        app.use(webpacHotkMiddleware(compiler));
    }
}