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

function IconHash(_ref) {
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
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.537 8.902H5.463a.646.646 0 000 1.293h13.074a.646.646 0 000-1.293zm0 4.903H5.463a.646.646 0 100 1.293h13.074a.646.646 0 000-1.293z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M10.437 4.004a.646.646 0 00-.714.571L8.09 19.283a.646.646 0 101.285.142l1.634-14.707a.646.646 0 00-.57-.714zm4.903 0a.646.646 0 00-.714.571l-1.634 14.707a.646.646 0 001.285.143L15.91 4.718a.646.646 0 00-.571-.714z"
  }));
}

IconHash.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconHash;
//# sourceMappingURL=IconHash.js.map
