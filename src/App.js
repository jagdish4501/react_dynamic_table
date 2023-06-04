
import React from 'react';
import DynamicTable from './Table';

const App = () => {
  const data = [
    { "Plant ID": 'xxxx xx', 'Custemor name': "wjkeh", 'Invertor capacity': 'xxx-ewre' },
    { "Plant ID": 'xxxx xx', 'Custemor name': "wjkeh", 'Invertor capacity': 'xxx-ewre' },
    { "Plant ID": 'xxxx xx', 'Custemor name': "wjkeh", 'Invertor capacity': 'xxx-ewre' },
    { "Plant ID": 'xxxx xx', 'Custemor name': "wjkeh", 'Invertor capacity': 'xxx-ewre' },
    // ... additional rows
  ];



  const states = [
    { id: 'state1', name: 'State 1' },
    { id: 'state2', name: 'State 2' },
    { id: 'state3', name: 'State 3' },
    { id: 'state4', name: 'State 4' },
    { id: 'state5', name: 'State 5' },
    { id: 'state6', name: 'State 6' },
    { id: 'state7', name: 'State 7' },
    // Add more states as needed
  ];

  return (
    <div>
      <h1>Dynamic Table</h1>
      <br />
      <DynamicTable data={data} states={states} />
    </div>
  );
};

export default App;

