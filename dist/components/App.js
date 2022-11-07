"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _react = _interopRequireDefault(require("react"));
var _DatePicker = _interopRequireDefault(require("./DatePicker"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const DatePickerContainer = _styledComponents.default.main(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 15px;\n  display: flex;\n"])));
function App() {
  function onChange(value) {
    return value;
  }
  function onClick(value) {
    return value;
  }
  return /*#__PURE__*/_react.default.createElement(DatePickerContainer, null, /*#__PURE__*/_react.default.createElement(_DatePicker.default, {
    onChange: onChange,
    onClick: onClick
  }));
}