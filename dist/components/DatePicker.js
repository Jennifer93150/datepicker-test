"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePicker;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _reactCalendar = _interopRequireDefault(require("react-calendar"));
require("react-calendar/dist/Calendar.css");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const CalendarWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-shadow: 5px 5px 15px 5px #000000;\n  margin: 20px;\n  inset: 0px auto auto 0px;\n  transform: translate3d(-18px, 20px, 0px);\n"])));

/**
 * Component datapicker
 */
function DatePicker() {
  const [date, setDate] = (0, _react.useState)(new Date());
  const [dateInput, setDateInput] = (0, _react.useState)();
  const [open, setOpen] = (0, _react.useState)(false);
  const [changeInput, setChangeInput] = (0, _react.useState)(false);
  const dateNumber = date.toLocaleDateString();
  let dateInputString = new Date();
  if (dateInput) {
    const words = dateInput.split('/');
    const day = words[0];
    const month = words[1];
    const year = words[2];
    dateInputString.setDate(day);
    dateInputString.setMonth(month - 1);
    dateInputString.setFullYear(year);
  }
  const onChange = date => {
    setDate(date);
    setOpen(false);
    setChangeInput(false);
  };
  const handleChange = e => {
    setDateInput(e.target.value);
    setChangeInput(true);
    if (e.target.value.length === 10) {
      setOpen(false);
    }
  };
  const handleClick = () => {
    setOpen(true);
  };
  const inputValue = dateInput && changeInput ? dateInput : dateNumber;
  const calendarValue = dateInput && changeInput ? dateInputString : date;
  return /*#__PURE__*/_react.React.createElement("div", null, /*#__PURE__*/_react.React.createElement("input", {
    value: inputValue,
    onClick: handleClick,
    onChange: handleChange,
    type: "text",
    className: "form-control"
  }), open ? /*#__PURE__*/_react.React.createElement(CalendarWrapper, null, /*#__PURE__*/_react.React.createElement(_reactCalendar.default, {
    onChange: onChange,
    value: calendarValue
  })) : null);
}