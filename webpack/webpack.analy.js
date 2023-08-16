const prodConfig = require('./webpack.prod')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const {merge} = require('webpack-merge')


module.exports = smp.wrap(merge(prodConfig,{}))