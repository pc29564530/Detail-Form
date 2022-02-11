import logo from './logo.svg';
import React ,{useEffect, useState} from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './App.css';


function App() {
  const [date,setDate] = useState(new Date());
  const handleChange=(date)=>{
    setDate(date);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form has been submitted')
  }
  const minimumDate=new Date();




  return (
    <div className="app">
        
        <form  className="form-data" onSubmit={handleSubmit}>
        <h1>USER DETAIL</h1>
          <div>
            <label>Name:</label>
            <input type='text' placeholder='Name' required/>
            
          </div>
          <div>
            <label>Gender:</label>
            <input type='text' placeholder='Gender' required/>
          </div>
          <div>
             <label>Date of Birth</label>
             <DatePicker  selected={date} onChange={handleChange} minDate={minimumDate.setFullYear(minimumDate.getFullYear()-150)} maxDate={new Date()}
             showYearDropdown scrollableMonthYearDropdown  />
          </div>
          <div>
            <label>Address:</label>
            <textarea type='text' placeholder='Address' />
          </div>
          <div>
            <label>College Name:</label>
            <input text='text' placeholder='College Name' />
          </div>
          <div>
            <label>City:</label>
            <select name='City' value='City'>
              <option>Mumbai</option>
              <option>Chennai</option>
              <option>Calcutta</option>
              <option>Pune</option>
              <option>Bangalore</option>
            </select>
          </div>
         <div>
          <button className='button'>Submit</button>
        </div>
        </form>
   
    </div>
  );
}

export default App;
