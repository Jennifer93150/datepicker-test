import React, { useState } from "react";
import PropTypes from 'prop-types';

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
const Test = (props) => {
    console.log()
    const [date, setDate] = useState(new Date());
    const [dateInput, setDateInput] = useState();
    const [openCalendar, setOpenCalendar]= useState(false);
    const [changeInput, setChangeInput]= useState(false);
    const dateInputString = new Date();
    const todaysDateInNumbers = date.toLocaleDateString();
    const { onChange, handleClick , handleChange} = this.props;

    if (dateInput){
        const words = dateInput.split('/');
        const day = words[0];
        const month = words[1];
        const year = words[2];
        dateInputString.setDate(day);
        dateInputString.setMonth(month-1);
        dateInputString.setFullYear(year);
    }

    onChange = (date) => {
        setDate(date);
        setOpenCalendar(false);
        setChangeInput(false);
    }

    handleChange = (e) => {
        setDateInput(e.target.value);
        setChangeInput(true)
        if(e.target.value.length === 10){
            setOpenCalendar(false);
        }
    }
    
    handleClick = () =>{
        setOpenCalendar(true);
    }

    const inputValue = dateInput && changeInput ? dateInput : todaysDateInNumbers;
    const calendarValue = dateInput && !dateInput.length < 10 && changeInput ? dateInputString : date;

    return (
        <div>
            <input 
                value={inputValue} 
                type="text"
                onClick={handleClick}
                onChange={handleChange}
            />
            
            {openCalendar ? (
                <CalendarWrapper >
                    <Calendar onChange={onChange} value={calendarValue}/>
                </CalendarWrapper>
            ): null}
        </div>
    )
}
Test.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    value: PropTypes.string,
};

export default Test;