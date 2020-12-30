const colors = require('./config/colors')

module.exports = {
  name: 'Electron Highlighter',
  inputFile: 'config/theme.json',
  outputDir: 'themes',
  ...colors,
  transparent: '#ffffff00',
  backgroundColor: '#1d232f'
}
