import React, { useState, useEffect } from 'react';
import './css/Prompt.css'
import { AiOutlineClose } from "react-icons/ai";
const Prompt = ({ states, data, setData, setClicketColumn, value, setValue }) => {
    //search filter functionality
    const [searchQuery, setSearchQuery] = useState('');
    const [column, setColumn] = useState(null)
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleStateChange = (event) => {
        let temp = new Set(value);
        if (value.has(event.target.value.toString()))
            temp.delete(event.target.value.toString());
        else temp.add(event.target.value.toString())
        setValue(temp)
        setColumn(event.target.name)
    }

    const filteredStates = states.filter((state) => {
        for (const key in state) {
            if (typeof state[key] === 'string' && state[key].toLowerCase().includes(searchQuery.toLowerCase())) {
                return true;
            }
            if (typeof state[key] === 'number' && String(state[key]).toLowerCase().includes(searchQuery.toLowerCase())) {
                return true;
            }
        }
        return false;
    });
    //******************************** */
    // filter table functionality
    // const [Temp] = useState(data)
    const updateStateByValue = () => {
        if (value !== null && column !== null) {
            setData(data.filter(item => {
                for (const key in item) {
                    if (key === column && item[key] && value.has((item[key].toString()))) {
                        return true;
                    }
                }
                return false;
            }))
        }
    };

    useEffect(() => {
        updateStateByValue();
    }, [value]);

    //****************************** */



    return (
        <div className="state-prompt">
            <AiOutlineClose onClick={() => { setClicketColumn(null) }} />
            <div className="state-list" >
                <input
                    type="text"
                    placeholder="Search "
                    value={searchQuery}
                    onChange={handleSearchChange}
                />

                {
                    filteredStates.map((state) =>
                        Object.keys(state).map((key) => (
                            <p key={state[key]}>
                                <input
                                    type="checkbox"
                                    name={[key]}
                                    value={state[key]}

                                    onChange={handleStateChange}
                                    id={state[key]}
                                    checked={value.has(state[key].toString())}
                                />
                                <label htmlFor={state[key]}>{state[key]}</label>
                            </p>
                        ))
                    )
                }

            </div>
        </div>
    );
};
export default Prompt;
