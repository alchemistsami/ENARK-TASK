import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from "react-bootstrap/Button"
import NumberInputModal from '../Component/TimerModel';
import "../Component/compt1.css"

const Component2 = () => {
  const [inputValue, setInputValue] = useState('');
  let [time,setTime]=useState(7000)

  const handleTimesubmit=(input)=>{
    setTime(input*1000)
  }

  const handleButtonClick = (e) => {
    e.preventDefault()
    toast.success(inputValue, {theme:"colored",autoClose:time });
    setInputValue("")
  };

  return (
    <div>
      <form onSubmit={handleButtonClick} >
        <div className='inputdiv' >
          <label htmlFor='inputvalue' className='labelcustom'>Enter Custom Toast Text </label>
          <input
            className='inputcustom'
            id='inputvalue'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <section>
          <Button onClick={handleButtonClick} className='btn' variant="secondary" size="lg" >
            Show Custom Toast Message
          </Button>
          
          <NumberInputModal className='setting-btn' handleTimesubmit={handleTimesubmit}/>
          </section>
        </div>
      </form>
         </div>
  );
};

export default Component2;
