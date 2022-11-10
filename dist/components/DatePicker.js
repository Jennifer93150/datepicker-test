"use strict";
import React, {useState} from "react";
Object.defineProperty(exports, "__esModule", {
  value: true
});
//exports.default = DatePicker;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _reactCalendar = _interopRequireDefault(require("react-calendar"));
require("react-calendar/dist/Calendar.css");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const CalendarWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    margin: 20px;\n    transform: translate3d(-28px, 0px, 0px);\n"])));

/**
 * Component datapicker
 */
export default function DatePicker(props) {
  const [date, setDate] = (0, useState)(new Date());
  const [dateInput, setDateInput] = (0, useState)();
  const [openCalendar, setOpenCalendar] = (0, useState)(false);
  const [changeInput, setChangeInput] = (0, useState)(false);
  const dateInputString = new Date();
  const todaysDateInNumbers = date.toLocaleDateString();
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
    setOpenCalendar(false);
    setChangeInput(false);
    props.onClick(date);
  };
  const handleChange = e => {
    setDateInput(e.target.value);
    setChangeInput(true);
    if (e.target.value.length === 10) {
      setOpenCalendar(false);
      props.onChange(e.target.value);
    }
  };
  const handleClick = () => {
    setOpenCalendar(true);
  };
  const inputValue = dateInput && changeInput ? dateInput : todaysDateInNumbers;
  const calendarValue = dateInput && !dateInput.length < 10 && changeInput ? dateInputString : date;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    className: props.class,
    id: props.id,
    value: inputValue,
    type: "text",
    onClick: handleClick,
    onChange: handleChange
  }), openCalendar ? /*#__PURE__*/React.createElement(CalendarWrapper, null, /*#__PURE__*/React.createElement(_reactCalendar.default, {
    onChange: onChange,
    value: calendarValue
  })) : null);
}