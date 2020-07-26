# Change Log
All notable changes to the "electron-highlighter" extension will be documented in this file.

## 1.2.9
- Actually do the stuff from 1.2.8
- Fix the `publish` script so it actually rebuilds the theme before publishing... 🤦‍♂

## 1.2.8
- Explicitly set `tab.activeBorder` to the background color
- Change the base `variable` color from green to gray (not sure how/why it ever got set to green... sorry about that)

## 1.2.7
- Change `tab.activeBorder` to `tab.activeBorderTop`

## 1.2.6
- Minor UI updates, mostly around standardizing highlight colors for selection ranges

## 1.2.5
- Make vendored CSS property names the same color as normal property names
- Make CSS custom property ("variable") color red to match variable color in CSS preprocessors
- Updated CSS demo file with examples to showcase these changes

## 1.2.4
- Remove superfluous config for console class that is now covered by more generic `support.class`
- fix color on `support.class` (I intended for it to be yellow, not gray)

## 1.2.3
- More consistent highlighting of Classes

## 1.2.2
- set punctuation.accessor and keyword colors to purple. This affects things like optional chaining in JS and the `let` keyword in Rust
- remove a declaration causing JS variables to become green after the latest VSCode update

## 1.2.1
- Make `this` keyword red after last versions changes

## 1.2.0

Doing a minor bump here because this kind of significantly changes the look of JavaScript files

- Changed object property color from red to default text color

## 1.1.29
- Update screenshots

## 1.1.28
- Set highlighting for `undefined` constant to orange. Change `null` from red to orange for consistency.

## 1.1.27
- Darkens more editor elements for consistency after 1.1.26

## 1.1.26
- Slightly darkens editor background

## 1.1.25
- Colors the modified settings item indicator

## 1.1.24
- Makes dropdown inputs consistent with other inputs in Settings GUI

## 1.1.23
- Adds some missing terminal styles

## 1.1.22
- Tweak tabs border stuff

## 1.1.21
- Fix bracket color in object destructuring inside of method signatures

## 1.1.20
- Fix bracket color in array destructuring

## 1.1.19
- Fix comma color in method signatures

## 1.1.18
- Better highlighting support for JS `console` object and methods

## 1.1.17
- Fix bracket color in object destructuring

## 1.1.16
- Modifies activityBar active and inactive foreground colors

## 1.1.15
- Adds color customizations for modified tab border indicators (when you set `"workbench.editor.highlightModifiedTabs": true` in settings)

## 1.1.14
- Adds color customizations for new `activityBar` options introduced in VS Code 1.40.0

## 1.1.13
- Changes the comma color from 1.1.12 to be less muted (was too hard to see)

## 1.1.12
- Adds highlighting rule for commas that were not being properly targeted

## 1.1.11
- Fixes incorrect highlighting of `Class` keyword

## 1.0.0...1.1.10
- Sorry... I did a bad job documenting changes. I'll try to be better going forward.

## 1.0.0 
- Initial release
