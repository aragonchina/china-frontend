'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-91557a6f.js');
require('./unsupportedIterableToArray-d83f5963.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
var IconPropTypes = require('./IconPropTypes-72fd2e1e.js');

function IconLeft(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M15.777 18.392a.737.737 0 000-1.054L9.834 11.5l5.943-5.838a.737.737 0 000-1.055.77.77 0 00-1.074 0l-6.48 6.365a.737.737 0 000 1.055l6.48 6.365a.77.77 0 001.074 0z"
  }));
}

IconLeft.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconLeft;
//# sourceMappingURL=IconLeft.js.map
