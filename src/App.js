import logo from './logo.svg';
import React ,{useEffect, useState} from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './App.css';


function App() {
  const [date,setDate] = useState(null);
  
  let data = [{name:"Delhi"},{name:'Chennai'}, {name:'Pune'}, {name:'Bangalore'}, {name:'Mumbai'}, {name:"Calcutta"}];

  const [city,setCity] = useState();
  const cityChange = (data)=>{
    setCity(data);
  }
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
            <input type='text' placeholder='Name' required/>
          </div>
          <div>
            <input type='text' placeholder='Gender' required/>
          </div>
          <div>
             <DatePicker  selected={date}   placeholderText="Date of Birth" onChange={handleChange} minDate={minimumDate.setFullYear(minimumDate.getFullYear()-150)} maxDate={new Date()}
             showYearDropdown scrollableMonthYearDropdown  />
          </div>
          <div>
            <textarea type='text' name="address" placeholder='Address' />
          </div>
          <div>
            <input text='text' placeholder='College Name' />
          </div>
          <div>
            <select onChange={cityChange}>
              <option value="city">City</option>
              {data.map((city=><option >{city.name}</option>))}
              <option value="City" onChange={cityChange}></option>
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
