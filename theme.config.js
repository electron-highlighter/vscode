const colors = require('./config/colors')
const lightColors = require('./config/colors-light')

module.exports = [
  {
    name: 'Electron Highlighter',
    inputFile: 'config/theme.json',
    outputDir: 'themes',
    ...colors,
    transparent: '#ffffff00',
    backgroundColor: '#1d232f',
  },
  {
    name: 'Electron Highlighter Day',
    inputFile: 'config/theme-light.json',
    outputDir: 'themes',
    ...lightColors,
    transparent: '#ffffff00',
    backgroundColor: '#eef0f5',
  },
]
