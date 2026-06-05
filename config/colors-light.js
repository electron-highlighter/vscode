// Light palette for Electron Highlighter Day. Values mirror the canonical
// palette (electron-highlighter/palette: electron-day.js). The var NAMES keep
// their dark-theme roles, so neutrals are inverted for light:
//   black  = darkest dark-chrome  -> light chrome surface
//   white  = brightest text       -> on-accent light text
//   lightGray = editor foreground -> dark text
//   gray   = secondary UI text    -> mid-dark
//   darkGray = comments           -> muted
module.exports = {
  red: '#f52a65',
  orange: '#f0633c',
  yellow: '#d18a16',
  green: '#10a877',
  cyan: '#0a9fbf',
  blue: '#366ff0',
  purple: '#8b4fe0',
  pink: '#e62b86',
  black: '#e4e7ee',
  background: '#eef0f5',
  darkGray: '#7b88a8',
  gray: '#59647e',
  lightGray: '#2f3b54',
  white: '#eef0f5',
}
