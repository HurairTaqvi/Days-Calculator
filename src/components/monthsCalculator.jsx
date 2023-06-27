import React, { useState } from "react";
// import "./App.css";

function MonthsCal() {
  // Years
  const [Year1, setYear1] = useState();
  const [Year2, setYear2] = useState();

  const handleYear1Change = (event) => {  setYear1(event.target.value) }
  const handleYear2Change = (event) => { setYear2(event.target.value) };

  // Months
  const [Month1, setMonth1] = useState();
  const [Month2, setMonth2] = useState();

  const handleMonth1Change = (event) => { setMonth1(event.target.value) };
  const handleMonth2Change = (event) => { setMonth2(event.target.value) };

  // Results
  const [Result1, setResult1] = useState();
  const [Result2, setResult2] = useState();
  const [Result, setResult] = useState();
  
  const Submit=()=>{
    if(Year1 !=='0' || Year2 !=='0' || Month1 !=='0' || Month2 !=='0'){
      let p_year1 = parseInt(Year1);
      let p_year2 = parseInt(Year2);
      let p_month1 = parseInt(Month1);
      let p_month2 = parseInt(Month2);
      debugger
        let res = ((p_year2 - p_year1) * 12)
        let res2 = ((p_month2 - p_month1)) 
        setResult1(res)
        console.log(Result1)
        console.log(Result2)

        setResult2(res2)
        setResult(res + res2)
      }
  }
  
  return (
    <div className="App">
      <div>
        <h1>Days Calculator</h1>
        
        <p><label htmlFor="Year1">Year - To:</label></p>
        <p>
        <input
          id="Year1"
          type="text"
          value={Year1}
          onChange={handleYear1Change}
        />
        </p>
        <br/>

        <label htmlFor="Month1">Year - From:</label>
        <input
          id="Year2"
          type="text"
          value={Year2}
          onChange={handleYear2Change}
        /><br/>

        <label htmlFor="Month1">Month - To:</label>
        <input
          id="Month1"
          type="text"
          value={Month1}
          onChange={handleMonth1Change}
        /><br/>

        <label htmlFor="Month2">Month - From:</label>
        <input
          id="Month2"
          type="text"
          value={Month2}
          onChange={handleMonth2Change}
        /><br/>


        <button onClick={Submit}>Submit</button>

        {/* <p>Year Difference: {Result1}</p>
        <p>Month Difference: {Result2}</p> */}
        <p>Total Months {Result}</p>
      </div>
    </div>
  );
}
export default MonthsCal;