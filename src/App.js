
import React from 'react';
import DynamicTable from './Table';
import './css/App.css'
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const data = [
    {
      "stateId": 28,
      "disComId": 87,
      "stateName": "RAJASTHAN",
      "disCom": "JVVNL",
      "CircleId": 2631,
      "circleName": "Bharatapur",
      "circleCode": "96253",
      "feederID": 6774995,
      "feederCode": "1033732",
      "FeederName": "11 KV AGHAPUR",
      "TownName": "NA NA",
      "JE_NAME": "GANPAT singh LODHA",
      "MobileNo": "9413390715",
      "consumerCount": 1147
    },
    {
      "stateId": 28,
      "disComId": 87,
      "stateName": "RAJASTHAN",
      "disCom": "JVVNL",
      "CircleId": 2631,
      "circleName": "Bharatapur",
      "circleCode": "96253",
      "feederID": 6774945,
      "feederCode": "1034311",
      "FeederName": "11 KV AKHAIGARH",
      "TownName": "NA NA",
      "JE_NAME": "SHIV SINGH MEENA",
      "MobileNo": "9413390718",
      "consumerCount": 671
    },
    {
      "stateId": 28,
      "disComId": 87,
      "stateName": "RAJASTHAN",
      "disCom": "JVVNL",
      "CircleId": 2631,
      "circleName": "Bharatapur",
      "circleCode": "96253",
      "feederID": 6776381,
      "feederCode": "2263181",
      "FeederName": "11 KV ATARI TOHILA",
      "TownName": "NA NA",
      "JE_NAME": "NIRBHAN SINGH",
      "MobileNo": "9414029128",
      "consumerCount": 10
    },
    {
      "stateId": 28,
      "disComId": 87,
      "stateName": "RAJASTHAN",
      "disCom": "JVVNL",
      "CircleId": 2631,
      "circleName": "Bharatapur",
      "circleCode": "96253",
      "feederID": 6774896,
      "feederCode": "1033723",
      "FeederName": "11 KV BACHHAMADI",
      "TownName": "NA NA",
      "JE_NAME": "GANPAT singh LODHA",
      "MobileNo": "9413390715",
      "consumerCount": 931
    },
    {
      "stateId": 28,
      "disComId": 87,
      "stateName": "RAJASTHAN",
      "disCom": "JVVNL",
      "CircleId": 2631,
      "circleName": "Bharatapur",
      "circleCode": "96253",
      "feederID": 6775015,
      "feederCode": "1107883",
      "FeederName": "11 KV BADHA",
      "TownName": "NA NA",
      "JE_NAME": "BHOOPENDRA SINGH",
      "MobileNo": "9413390719",
      "consumerCount": 365
    },
    {
      "stateId": 28,
      "disComId": 87,
      "stateName": "RAJASTHAN",
      "disCom": "JVVNL",
      "CircleId": 2631,
      "circleName": "Bharatapur",
      "circleCode": "96253",
      "feederID": 6775537,
      "feederCode": "1034284",
      "FeederName": "11 KV BAHRAMADA",
      "TownName": "NA NA",
      "JE_NAME": "SHIV SINGH MEENA",
      "MobileNo": "9413390718",
      "consumerCount": 998
    },
    {
      "stateId": 28,
      "disComId": 87,
      "stateName": "RAJASTHAN",
      "disCom": "JVVNL",
      "CircleId": 2631,
      "circleName": "Bharatapur",
      "circleCode": "96253",
      "feederID": 6775243,
      "feederCode": "1034356",
      "FeederName": "11 KV BAILARA",
      "TownName": "NA NA",
      "JE_NAME": "BHOOPENDRA SINGH",
      "MobileNo": "9413390719",
      "consumerCount": 149
    },
    {
      "stateId": 28,
      "disComId": 87,
      "stateName": "RAJASTHAN",
      "disCom": "JVVNL",
      "CircleId": 2631,
      "circleName": "Bharatapur",
      "circleCode": "96253",
      "feederID": 6774783,
      "feederCode": "1033480",
      "FeederName": "11 KV BAJARIYA",
      "TownName": "NA NA",
      "JE_NAME": "Abhishek Gupta",
      "MobileNo": "9413390721",
      "consumerCount": 2027
    },
    {
      "stateId": 28,
      "disComId": 87,
      "stateName": "RAJASTHAN",
      "disCom": "JVVNL",
      "CircleId": 2631,
      "circleName": "Bharatapur",
      "circleCode": "96253",
      "feederID": 6774644,
      "feederCode": "1033744",
      "FeederName": "11 KV BAJHERA",
      "TownName": "NA NA",
      "JE_NAME": "GANPAT singh LODHA",
      "MobileNo": "9413390715",
      "consumerCount": 738
    },
  ]
  const [apiData, setApiData] = useState(data)
  const [page_no, setPage_no] = useState(0)
  const [map, setMap] = useState(new Map());
  const getCustomersData = (key) => {
    axios
      .get(`http://localhost:3000/employees?_limit=5&_page=${key}`)
      .then((data) => {
        console.log("api called");
        const temp = new Map(map);
        temp.set(key, data.data);
        setMap(temp);
        setApiData(data.data);
      })
      .catch(error => console.log(error));
  };
  const first_page = () => {
    let x = map.get(0)
    console.log(x)
    if (x === undefined)
      getCustomersData(0)
    else
      setApiData(x);
    setPage_no(0);
  }
  const prev_page = () => {
    if (page_no !== 0) {
      let x = map.get(page_no - 1);
      if (x === undefined)
        getCustomersData(page_no - 1);
      else
        setApiData(x)
      setPage_no(page_no - 1)
    }
  }
  const next_page = () => {
    let x = map.get(page_no + 1)
    if (x === undefined)
      getCustomersData(page_no + 1)
    else
      setApiData(x)
    setPage_no(page_no + 1)
  }
  const last_page = () => {

  }


  return (
    <>
      <h1>Plant Lists</h1>
      <br />
      <div className='Table'>
        <DynamicTable data={apiData} />
      </div>
      <div className="pagination">
        <button onClick={first_page}>! first Page !</button>
        <button onClick={prev_page}>&laquo;</button>
        <button onClick={next_page}>&raquo;</button>
        <button onClick={last_page}>! last Page !</button>
      </div>
    </>
  );
};

export default App;

