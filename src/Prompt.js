import React, { useState, useCallback, useEffect } from 'react';
import './css/Prompt.css'
const Prompt = ({ states, data, setData, setClicketColumn }) => {
    //search filter functionality
    const [searchQuery, setSearchQuery] = useState('');
    const [value, setValue] = useState(null);
    const [column, setColumn] = useState(null)
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleStateChange = (event) => {
        setValue(event.target.value)
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
    const updateStateByValue = useCallback(() => {
        var updatedData = data
        if (value !== null && column !== null) {
            setClicketColumn(null)
            updatedData = data.filter(item => {
                for (const key in item) {
                    if (key === column && item[key] === value) {
                        return true;
                    }
                }
                return false;
            })
        }
        setData(updatedData);
    }, [column, value, data, setData, setClicketColumn]);

    useEffect(() => {
        // This code will be executed after every state change
        updateStateByValue();
    }, [updateStateByValue]);

    //****************************** */



    return (
        <div className="state-prompt">
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
                                    checked={value === state[key]}
                                    onChange={handleStateChange}
                                    id={[key]}
                                />
                                <label htmlFor={[key]}>{state[key]}</label>
                            </p>
                        ))
                    )
                }

            </div>
        </div>
    );
};
export default Prompt;
