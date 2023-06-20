import './css/Table.css'
import Prompt from './Prompt.js'
import React, { useState, useEffect } from 'react'
import { BiCabinet } from "react-icons/bi"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"

const DynamicTable = ({ data }) => {
    const columns = Object.keys(data[0]);
    //colum state filter
    const [clickedColumn, setClickedColumn] = useState(null);
    const [states, setStates] = useState([]);
    const [value, setValue] = useState(new Set());
    const colum_data = (key) => {
        const uniqueValues = new Set();
        sortedData.forEach((obj) => {
            uniqueValues.add(obj[key]);
        });
        return Array.from(uniqueValues).map((value) => { return { [key]: value }; });
    };
    const handlePopUpControl = (column) => {
        const arr = colum_data(column)
        const newSet = new Set();
        arr.forEach(obj => {
            newSet.add(obj[column])
        });
        // setValue(newSet)
        setStates(arr)
        clickedColumn === column ? setClickedColumn(null) : setClickedColumn(column);
    };
    //********************************************


    //column sorting code 
    const [sortedData, setSortedData] = useState(data);
    const [sortColumn, setSortColumn] = useState(null);
    const [order, setOrder] = useState('rnd')
    const handleSortOnClick = (columnName) => {
        let sortedTableData = [...sortedData];
        // Check if the table is already sorted by the clicked column
        if (sortColumn === columnName && order !== 'rnd') {
            // Reverse the order of the sorted table
            if (order === 'asc') {
                sortedTableData.reverse();
                setOrder('desc')
            } else if (order === 'desc') {
                sortedTableData = data;
                setOrder('rnd')
            }
        } else {
            // Sort the table based on the clicked column
            sortedTableData.sort((a, b) => {
                if (a[columnName] < b[columnName]) return -1;
                if (a[columnName] > b[columnName]) return 1;
                return 0;
            });
            setOrder('asc')
        }
        setSortedData(sortedTableData);
        setSortColumn(columnName);
    }
    //***************************


    //esc key event handler********************
    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            setClickedColumn(null);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [clickedColumn]);

    useEffect(() => {
        setSortedData(data)
    }, [data]);
    //*************************** 



    return (
        <table className="dynamic-table">
            <thead>

                <tr className="fixed-header">
                    {columns.map((column) => (
                        <th key={column} className="table-header">
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <span onClick={() => handleSortOnClick(column)} >
                                    {column}

                                </span>
                                {sortColumn === column && order === 'asc' && <AiOutlineArrowUp />}
                                {sortColumn === column && order === 'desc' && <AiOutlineArrowDown />}
                                <span className="popup-container">
                                    <BiCabinet onClick={() => handlePopUpControl(column)} />
                                </span>
                                {clickedColumn != null && clickedColumn === column && <Prompt states={states} data={data} setData={setSortedData} setClicketColumn={setClickedColumn} value={value} setValue={setValue} />}
                            </div>
                        </th>

                    ))}


                </tr>
            </thead>
            <tbody onClick={() => { setClickedColumn(null) }}>
                {sortedData.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td key={column}>{item[column]}</td>
                        ))}
                    </tr>
                ))}

            </tbody>

        </table>
    );
};

export default DynamicTable;
