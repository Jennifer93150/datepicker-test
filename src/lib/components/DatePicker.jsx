import { React, useState } from "react";

import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CalendarWrapper = styled.div`
    position: absolute;
    margin: 20px;
    transform: translate3d(-28px, 0px, 0px);
`;

/**
 * Component datapicker
 */
export default function DatePicker(props) {
    
    const [date, setDate] = useState(new Date());
    const [dateInput, setDateInput] = useState();
    const [openCalendar, setOpenCalendar]= useState(false);
    const [changeInput, setChangeInput]= useState(false);
    const dateInputString = new Date();
    const todaysDateInNumbers = date.toLocaleDateString();

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
        setOpenCalendar(false);
        setChangeInput(false);
        props.onChange(date.toLocaleDateString());
        
    }

    const handleChange = (e) => {
        setDateInput(e.target.value);
        setChangeInput(true);
        if(e.target.value.length === 10){
            setOpenCalendar(false);
            props.onChange(e.target.value);
        }
    }
    
    const handleClick = () =>{
        setOpenCalendar(true);
    }
    const inputValue = dateInput && changeInput ? dateInput : todaysDateInNumbers;
    const calendarValue = dateInput && !dateInput.length < 10 && changeInput ? dateInputString : date;

    return (
        <div>
            <input 
                className={props.className}
                id={props.id}
                value={inputValue} 
                type="text"
                onClick={handleClick}
                onChange={handleChange}
            />
            
            {openCalendar ? (
                <CalendarWrapper >
                    <Calendar 
                    onChange={onChange} 
                    value={calendarValue}
                    />
                </CalendarWrapper>
                    
            ): null}
        </div>
    )
}
