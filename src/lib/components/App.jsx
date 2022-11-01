import React, { useState } from "react";

import DatePicker from './DatePicker';
import Test from './Test';
import styled from "styled-components";

const DatePickerContainer = styled.main`
  border-radius: 15px;
  display: flex;
`;

export default function App() {
  
  return (
    <DatePickerContainer>
      {/* <DatePicker/> */}
      <Test/>
    </DatePickerContainer>
  );
}


