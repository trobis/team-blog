const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const browserSync = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const tasks = new Map();
const config = require('./webpack.config');

// Execute a task
function run(task) {
    const start = new Date();
    console.log(`Starting '${task}'...`); // eslint-disable-line no-console
    return Promise.resolve().then(() => tasks.get(task)()).then(() => {
        const end = new Date();
        const time = end.getTime() - start.getTime();
        console.log(`Finished '${task}' after ${time}ms`); // eslint-disable-line no-console
    }, err => console.error(err.stack)); // eslint-disable-line no-console
}

tasks.set('start', () =>
    new Promise(resolve => {
        const bundler = webpack(config);

        browserSync({
            server: {
                baseDir: '.',

                middleware: [
                    webpackDevMiddleware(bundler, {
                        publicPath: '/',
                        stats: config.stats,
                    }),
                    webpackHotMiddleware(bundler),
                ],
            },
        });

        resolve();
    })
);

run(process.argv[2] || 'start');
