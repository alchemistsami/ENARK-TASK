import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { toast } from 'react-toastify';
import { useState } from "react"
import Button from "react-bootstrap/Button"
import NumberInputModal from '../Component/TimerModel';
import "../Component/compt1.css"

const Component1 = () => {
  let [count, setcount] = useState(0)
  let [time, settime] = useState(7000)

  useEffect(() => {
    setcount(0)
  }, [])

  const handleTimesubmit = (input) => {
    settime(input * 1000)
  }

  const handleButtonClick = () => {
    setcount(count + 1)
    toast.success(`Testing:${count}`, {
      theme: "colored", autoClose: time
    })
  };

  return (
    <div style={{ display: "block" }}>
    
      <section className='main-section-c1' >
        <Button className=' btn1' variant="secondary" size="lg" onClick={handleButtonClick}>
          Show Toast Message
        </Button>

        <section className='setting-btn'>
          <NumberInputModal className='setting-btn' handleTimesubmit={handleTimesubmit} />
        </section>

      </section>
    </div>
  );
};

export default Component1;
