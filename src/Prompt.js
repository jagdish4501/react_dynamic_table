import React, { useState } from 'react';
import './css/Prompt.css'
const Prompt = ({ states }) => {
    //search filter functionality
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };
    const filteredStates = states.filter((state) =>
        state.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
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
                    filteredStates.map((state) => (
                        <p key={state.id}>
                            <input
                                type="checkbox"
                                name="state"
                                value={state.id}
                                checked={selectedState === state.id}
                                onChange={handleStateChange}
                            />
                            {Object.keys(state).map((key) => (
                                key !== 'id' && (
                                    <span key={key}>{state[key]}</span>
                                )
                            ))}
                        </p>
                    ))
                }

            </div>
        </div>
    );
};
export default Prompt;
