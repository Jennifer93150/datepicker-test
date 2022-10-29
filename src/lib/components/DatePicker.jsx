import { React, useState } from "react";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  box-shadow: 5px 5px 15px 5px #000000;
  margin: 20px;
  inset: 0px auto auto 0px;
  transform: translate3d(-18px, 20px, 0px);
`;

/**
 * Component datapicker
 */
export default function DatePicker() {
    
    const [date, setDate] = useState(new Date());
    const [dateInput, setDateInput] = useState();
    const [open, setOpen]= useState(false);
    const [changeInput, setChangeInput]= useState(false);
    const dateNumber = date.toLocaleDateString();

    let dateInputString = new Date();

    if (dateInput){
        const words = dateInput.split('/');
        const day = words[0];
        const month = words[1];
        const year = words[2];
        dateInputString.setDate(day);
        dateInputString.setMonth(month-1);
        dateInputString.setFullYear(year);
    }
    
    const onChange = date => {
        setDate(date);
        setOpen(false);
        setChangeInput(false);
    }

    const handleChange = (e) => {
        setDateInput(e.target.value);
        setChangeInput(true)
      if(e.target.value.length === 10){
        setOpen(false);
      }
    }

    const handleClick = () =>{
        setOpen(true);
    }

    const inputValue = dateInput && changeInput ? dateInput : dateNumber;
    const calendarValue = dateInput && changeInput ? dateInputString : date;

    return (
        <div>
            <input value={inputValue} onClick={handleClick} onChange={handleChange} type="text" className="form-control"/>
            {open ? (
                <CalendarWrapper >
                    <Calendar onChange={onChange} value={calendarValue}/>
                </CalendarWrapper>
                    
            ): null}
        </div>
    )
}
