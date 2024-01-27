
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Button from "react-bootstrap/Button"
import "../Component/compt1.css"


const Component3 = () => {
  const [inputValue, setInputValue] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Set the number of items per page
  const [show, setshow] = useState(true);


  useEffect(() => {
    setCountdown(parseInt(inputValue, 10));
  }, [inputValue]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (inputValue == (NaN || 0 || null || undefined)) {
      alert("please input value")
    }
    else {
      let currentCountdown = countdown;
      toast.success(`count: ${currentCountdown}`, { theme: "colored", autoClose: (inputValue * 1000) });


      const countdownInterval = setInterval(() => {
        if (currentCountdown === 0) {

          clearInterval(countdownInterval);
          setshow(false)
          // Make API call after countdown reaches 0
          fetch('https://api.knowmee.co/api/v1/master/get-country-list')
            .then((response) => response.json())
            .then((data) => {
              console.log(JSON.stringify(data));
              // Display list of countries with pagination using toastify
              setData(data.responseData);
            })
            .catch((error) => console.error('API Error:', error));
        } else {
          setCountdown(currentCountdown - 1);
          currentCountdown = currentCountdown - 1;
        }
      }, 1000);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div >
      {show ?
        (<div className='formdiv'>

          <form className='customform'>
            <label
              className='labelc3'
              htmlFor='inputvalue'

            >Enter Custom Toast Text </label>
            <input
              className='inputc3'
              id='inputvalue'
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Button onClick={handleButtonClick} className='btn' variant="secondary" size="lg" >
              Show Custom Toast Message
            </Button>
          </form>

        </div>
        ) :
        (<>{(data.length !== 0) ? <div className="divc3">
          <div>
            <ul>
              {currentItems.map((ele) => (
                <li key={ele.country_name}>{ele.country_name}</li>
              ))}
            </ul>
          </div>
          <div>
            <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
              size="sm"
              variant="success">
              Previous
            </Button>


            <Button
              variant="success"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={indexOfLastItem >= data.length}
              size="sm"
              style={{ width: "75px" }}
            >
              Next
            </Button>
          </div>
        </div> : <div className='p-div-c3'><p>fetching...</p></div>}</>)}
    </div>
  );
};

export default Component3;
