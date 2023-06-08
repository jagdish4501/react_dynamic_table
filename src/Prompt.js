import React, { useState } from 'react';
import './css/Prompt.css'
const Prompt = ({ states }) => {
    //search filter functionality
    const [searchQuery, setSearchQuery] = useState('');
    const [value, setValue] = useState('');
    const [column, setColumn] = useState('')
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleStateChange = (event) => {
        setValue(event.target.value);
        setColumn(event.target.name)
        console.log(column + "  " + value)
    };
    const filteredStates = states.filter((state) => {
        for (const key in state) {
            if (state[key].toLowerCase().includes(searchQuery.toLowerCase())) {
                return true;
            }
        }
        return false;
    });

    //******************************** */
    //filter table functionality
    // const updateStateByValue = useCallback(() => {
    //     const updatedData = data.filter(item => {
    //         // Check if the current item contains the desired key and value pair
    //         for (const key in item) {
    //             if (item[key] === value) {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     });

    //     setData(updatedData);
    // }, [value, data, setData]);
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
                                />
                                <span key={key}>{state[key]}</span>
                            </p>
                        ))
                    )
                }

            </div>
        </div>
    );
};
export default Prompt;
