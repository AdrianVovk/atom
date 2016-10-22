'use strict'

const fs = require('fs-extra')
const os = require('os')
const path = require('path')

const CONFIG = require('../config')

module.exports = function () {
  const cachePaths = [
    path.join(CONFIG.repositoryRootPath, 'electron'),
    path.join(CONFIG.homeDirPath, '.substance-ide', '.node-gyp'),
    path.join(CONFIG.homeDirPath, '.substance-ide', 'storage'),
    path.join(CONFIG.homeDirPath, '.substance-ide', '.spm'),
    path.join(CONFIG.homeDirPath, '.substance-ide', '.npm'),
    path.join(CONFIG.homeDirPath, '.substance-ide', 'compile-cache'),
    path.join(CONFIG.homeDirPath, '.substance-ide', 'atom-shell'),
    path.join(CONFIG.homeDirPath, '.substance-ide', 'electron'),
    path.join(os.tmpdir(), 'atom-build'),
    path.join(os.tmpdir(), 'atom-cached-atom-shells')
  ]

  for (let path of cachePaths) {
    console.log(`Cleaning ${path}`)
    fs.removeSync(path)
  }
}
