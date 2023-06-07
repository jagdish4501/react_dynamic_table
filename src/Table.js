import './css/Table.css'
import Prompt from './Prompt.js'
import React, { useState, useEffect } from 'react'
import { BiCabinet } from "react-icons/bi"


const DynamicTable = ({ data }) => {

    const columns = Object.keys(data[0]);

    //colum state filter
    const [clickedColumn, setClickedColumn] = useState(null);
    const [states, setStates] = useState([]);
    const colum_data = (key) => {
        let i = 0;
        return data.map((obj) => {
            return { 'id': "id_" + i++, 'name': obj[key] };
        });
    }
    const handlePopUpControl = (column) => {
        const arr = colum_data(column)
        setStates(arr);
        clickedColumn === column ? setClickedColumn(null) : setClickedColumn(column);
    };
    //**********************************

    //column sorting code 
    const [sortedData, setSortedData] = useState(data);
    const [sortColumn, setSortColumn] = useState(null);
    const handleSortOnClick = (columnName) => {
        let sortedTableData = [...sortedData];
        // Check if the table is already sorted by the clicked column
        if (sortColumn === columnName) {
            // Reverse the order of the sorted table
            sortedTableData.reverse();
        } else {
            // Sort the table based on the clicked column
            sortedTableData.sort((a, b) => {
                if (a[columnName] < b[columnName]) return -1;
                if (a[columnName] > b[columnName]) return 1;
                return 0;
            });
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
    }, []);
    //*************************** 




    return (
        <table className="dynamic-table">
            <thead>

                <tr className="fixed-header">
                    {columns.map((column) => (
                        <th
                            key={column}
                            onClick={() => handleSortOnClick(column)}

                        >
                            {column} <BiCabinet onClick={() => handlePopUpControl(column)} />
                        </th>

                    ))}
                </tr>

                {clickedColumn !== null && (
                    <Prompt states={states} />
                )}
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
