const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
    Popper: ['popper.js', 'default']  // Not a typo, we're still using popper.js here
}))
