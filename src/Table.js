import './css/Table.css'
import StatePrompt from './Prompt.js'
import React, { useState } from 'react';
import { BiCabinet } from "react-icons/bi";






const DynamicTable = ({ data, states }) => {





    const columns = Object.keys(data[0]);
    const [hoveredColumn, setHoveredColumn] = useState(null);

    const handleColumnHover = (column) => {
        setHoveredColumn(column);
    };

    const handlePopoverClose = () => {
        setHoveredColumn(null);
    };

    return (
        <div>
            <table className="dynamic-table">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column}
                                onMouseEnter={() => handleColumnHover(column)}
                                onMouseLeave={handlePopoverClose}
                            >
                                {column} <BiCabinet />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {columns.map((column) => (
                                <td key={column}>{item[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* {hoveredColumn && <StatePrompt states={states} />} */}
            {hoveredColumn !== null && (
                <StatePrompt states={states} column={hoveredColumn} />
            )}
        </div>
    );
};

export default DynamicTable;
