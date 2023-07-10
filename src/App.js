import React, { useState, useEffect } from 'react';
import DynamicTable from './Table';
import './css/App.css';
import axios from 'axios';
const App = () => {
  const [pageSize, setPageSize] = useState(5)
  const [apiData, setApiData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [continuationToken, setContinuationToken] = useState(null);
  const [dataMap, setDataMap] = useState(new Map());

  const getCustomersData = (page) => {
    if (dataMap.get(page) !== undefined) {
      setApiData(dataMap.get(page))
    } else
      axios.get(`https://lumconnectdevproductmanagement.azurewebsites.net/v1/solar/getAllPlants/${pageSize}`,
        {
          headers: {
            'continuationToken': continuationToken
          }
        }
      )
        .then((response) => {
          console.log("API called");
          const newDataMap = new Map(dataMap);
          newDataMap.set(page, response.data.data.plantResponseList);
          setDataMap(newDataMap);
          setApiData(response.data.data.plantResponseList);
          setContinuationToken(response.data.data.continuationToken)

        })
        .catch(error => console.log(error));
  };
  useEffect(() => {
    getCustomersData(1)
  }, [pageSize]);

  const goToPage = (page) => {
    setPageNo(page);
    getCustomersData(page)
  };

  const firstPage = () => {
    goToPage(1);
  };

  const prevPage = () => {
    if (pageNo > 1) {
      goToPage(pageNo - 1);
    }
  };

  const nextPage = () => {
    goToPage(pageNo + 1);
  };

  const lastPage = () => {
    if (dataMap.size === 0)
      goToPage(1)
    else goToPage(dataMap.size)
  };

  return (
    <>
      <h1>Plant Lists</h1>
      <br />
      <div className='Table'>
        {apiData.length >= 1 && <DynamicTable data={apiData} />}
      </div>
      <div className="pagination">
        <button onClick={firstPage}>First Page</button>
        <button onClick={prevPage}>&laquo;</button>
        <button>page No :{pageNo}</button>
        <button onClick={nextPage}>&raquo;</button>
        <button onClick={lastPage}>Last Page</button>
      </div>


      <div className='page_sz'>
        <span>page size</span>
        <select
          value={pageSize}
          onChange=
          {(e) => { setPageSize(Number(e.target.value)); setContinuationToken(null); setDataMap(new Map()); setPageNo(1) }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </>
  );
};

export default App;
