import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Moment from 'moment';



npm install react-datepicker
function DateRange() {
    

    const [valueStart, onChange] = useState(new Date());

const rangeStart = Moment(valueStart).format('YYYY-MM-DD')


console.log(rangeStart)
    
    return (
        <div>
            <label>Set date</label>
        <DatePicker 
             onChange={onChange} 
             value={valueStart}
        />

            </div>
    );

    
}




export default DateRange;