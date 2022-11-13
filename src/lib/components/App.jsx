import React from "react";

import DatePicker from './DatePicker';
import styled from "styled-components";

const DatePickerContainer = styled.main`
  border-radius: 15px;
  display: flex;
`;

export default function App() {
  
  function onChange(value) {
    return value;
  }

  function setId(value) {
    return value;
  }

  function setClassName(value) {
    return value;
  }

  return (
    <DatePickerContainer>
      <DatePicker onChange={onChange} id={setId} className={setClassName}/>
    </DatePickerContainer>
  );
}


