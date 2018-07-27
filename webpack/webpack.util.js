const path = require('path')

const distDir = path.resolve(__dirname, './../dist')
const envDir = path.resolve(__dirname, `./../.env`)

module.exports = {
  distDir,
  envDir,
  pathResolve (target) {
    return path.resolve(__dirname, `./../${target}`)
  },
  env: require(envDir)
}
