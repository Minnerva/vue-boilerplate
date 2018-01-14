const path = require('path')
const distDir = path.resolve(__dirname, './../dist')

module.exports = {
  distDir,
  pathResolve (target) {
    return path.resolve(__dirname, `./../${target}`)
  }
}

