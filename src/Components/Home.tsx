import { useEffect, useState } from "react";
import dollar from "./Images/icon-dollar.svg";
import people from "./Images/icon-person.svg";
import "./Styles.css";
import logo from "./Images/logo.svg";

function Home() {

  const [value, setValue] = useState("")
  const [custom, setCustom] = useState(0)
  const [bill, setBill] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [peopleTotalAmount, setTotalAmount] = useState(0);
   
  useEffect(() => {
    let tip = 0;

    if (value === "1")
      tip = 5;
    if (value === "2")
      tip = 10;
    if (value === "3")
      tip = 15;
    if (value === "4")
      tip = 25;
    if (value === "5")
      tip = 50;
    if (value === "6")
      tip = custom;
    
    setTipAmount(bill * (tip/100));
      
  }, [value, custom]);

  function resetHandler(event : any) {
    event.preventDefault();
    setBill(0);
    setPeopleNumber(1);
    setValue("")
  }
  
  return (
    <div className="container">
      <img src={logo} className="logo" alt="logo" />
      <div className="content">
        <div className="left-col block">
          <div className="bill fill">
            <label htmlFor="bill">Bill</label>
            <div className="field">
              <img src={dollar} />
              <input className="input" value={bill} id="bill" type="number" onChange={(e) => setBill(Number(e.target.value))} />
            </div>
          </div>
          <div className="tip fill">
            <label>Select Tip %</label>
            <div className="buttons">
              <button className={value === "1" ? "select" : ""} onClick={() => setValue("1")}>5%</button>
              <button className={value === "2" ? "select" : ""} onClick={() => setValue("2")}>10%</button>
              <button className={value === "3" ? "select" : ""} onClick={() => setValue("3")}>15%</button>
              <button className={value === "4" ? "select" : ""} onClick={() => setValue("4")}>25%</button>
              <button className={value === "5" ? "select" : ""} onClick={() => setValue("5")}>50%</button>
              <button className={value === "6" ? "select custom" : "custom"} onClick={() => setValue("6")}><input placeholder="Custom" type="number" maxLength={500} onChange={(e) => {setCustom(Number(e.target.value))}} /></button>
            </div>
          </div>
          <div className="bill fill">
            <label htmlFor="peopleNumber">Number of People</label>
            <div className="field">
              <img src={people} />
              <input className="input" type="number" value={peopleNumber} id="peopleNumber" onChange={(e) => setPeopleNumber(Number(e.target.value))} />
            </div>
          </div>
        </div>
        <div className="right-col block">
          <div className="upper">
            <div className="box">
              <div className="text">
                <div className="amount">Tip Amount</div>
                <div className="person">/ person</div>
              </div>
              {/* <div className="cash">${(tipAmount / peopleNumber)}</div> */}
              <div className="cash">${peopleNumber >= 1 ? (tipAmount / peopleNumber).toFixed(2) : "Error"}</div>
            </div>
            <div className="box">
              <div className="text">
                <div className="amount">Total</div>
                <div className="person">/ person</div>
              </div>
                <div className="cash">${peopleNumber >= 1 ? ((bill + tipAmount) / peopleNumber).toFixed(2) : "Error"}</div>
            </div>
          </div>
          <div className="lower">
            <button onClick={resetHandler} className={value === "" ? "grey" : ""}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;