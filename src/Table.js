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

    const colum_data = (key) => {
        return data.map((obj) => {
            return { [key]: obj[key] };
        });
    };
    const handlePopUpControl = (column) => {
        const arr = colum_data(column)
        setStates(arr);
        setSortedData(data)
        clickedColumn === column ? setClickedColumn(null) : setClickedColumn(column);
    };
    //**********************************


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
    //*************************** 

    //on component updatedData

    //************ */


    return (
        <table className="dynamic-table">
            <thead>

                <tr className="fixed-header">
                    {columns.map((column) => (
                        <th key={column}>
                            <span onClick={() => handleSortOnClick(column)} >{column}</span>
                            <BiCabinet onClick={() => handlePopUpControl(column)} />
                            {sortColumn === column && order === 'asc' && <AiOutlineArrowUp />}
                            {sortColumn === column && order === 'desc' && <AiOutlineArrowDown />}
                            {clickedColumn != null && clickedColumn === column && <Prompt states={states} data={sortedData} setData={setSortedData} setClicketColumn={setClickedColumn} />}
                        </th>

                    ))}


                </tr>
            </thead>
            <tbody>
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
