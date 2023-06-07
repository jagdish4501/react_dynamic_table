
import React from 'react';
import DynamicTable from './Table';
import './css/App.css'

const App = () => {
  const data = [
    { "Plant ID": 'pid 1', 'Custemor name': "jagdish", 'Invertor capacity': 'ic 1' },
    { "Plant ID": 'pid 2', 'Custemor name': "rahul", 'Invertor capacity': 'ic 2' },
    { "Plant ID": 'pid 3', 'Custemor name': "anshika", 'Invertor capacity': 'ic 3' },
    { "Plant ID": 'pid 4', 'Custemor name': "anisha", 'Invertor capacity': 'ic 4' },
    { "Plant ID": 'pid 5', 'Custemor name': "aashis", 'Invertor capacity': 'ic 5' },
    { "Plant ID": 'pid 6', 'Custemor name': "priyansh", 'Invertor capacity': 'ic 6' },
    { "Plant ID": 'pid 7', 'Custemor name': "samarjeet", 'Invertor capacity': 'ic 7' },
    { "Plant ID": 'pid 8', 'Custemor name': "anuj", 'Invertor capacity': 'ic 8' },
    { "Plant ID": 'pid 9', 'Custemor name': "dharamjeet", 'Invertor capacity': 'ic 9' },
    { "Plant ID": 'pid 82', 'Custemor name': "kartik khandelwal", 'Invertor capacity': 'ic 32' },
    { "Plant ID": 'pid 18', 'Custemor name': "hritik", 'Invertor capacity': 'ic 83' },
    { "Plant ID": 'pid 81', 'Custemor name': "shail", 'Invertor capacity': 'ic 84' },
    { "Plant ID": 'pid 21', 'Custemor name': "ankur", 'Invertor capacity': 'ic 38' },
    { "Plant ID": 'pid 23', 'Custemor name': "aashma", 'Invertor capacity': 'ic 38' },
    { "Plant ID": 'pid 43', 'Custemor name': "disha", 'Invertor capacity': 'ic 18' },
    { "Plant ID": 'pid 23', 'Custemor name': "divyanshu", 'Invertor capacity': 'ic 78' },
    { "Plant ID": 'pid 343', 'Custemor name': "anubhav", 'Invertor capacity': 'ic 83' },
    { "Plant ID": 'pid 23', 'Custemor name': "guatum agrawaal", 'Invertor capacity': 'ic 38' },
    { "Plant ID": 'pid 345', 'Custemor name': "sagar yadav", 'Invertor capacity': 'ic 98' },
    { "Plant ID": 'pid 21', 'Custemor name': "tanya", 'Invertor capacity': 'ic 88' },
    { "Plant ID": 'pid 98', 'Custemor name': "sadhna", 'Invertor capacity': 'ic 68' },
    { "Plant ID": 'pid 38', 'Custemor name': "annu patel", 'Invertor capacity': 'ic 58' },
    { "Plant ID": 'pid 12', 'Custemor name': "chaturanand", 'Invertor capacity': 'ic 48' },
    { "Plant ID": 'pid 38', 'Custemor name': "bhumika hadiya", 'Invertor capacity': 'ic 68' },
    { "Plant ID": 'pid 82', 'Custemor name': "lkdjf", 'Invertor capacity': 'ic 98' },
    { "Plant ID": 'pid 808', 'Custemor name': "dfjkeh", 'Invertor capacity': 'ic 88' },
    { "Plant ID": 'pid 8', 'Custemor name': "ajkeh", 'Invertor capacity': 'ic 28' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 38' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 38' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 98' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 88' },
    { "Plant ID": 'pid 83', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 58' },
    { "Plant ID": 'pid 85', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 48' },
    { "Plant ID": 'pid 84', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 38' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 58' },
    { "Plant ID": 'pid 83', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 98' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 98' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 23' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 54' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 65' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 94' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 76' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 95' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 34' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 65' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 8' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 8' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 8' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 8' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 8' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 8' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 8' },
    { "Plant ID": 'pid 8', 'Custemor name': "wjkeh", 'Invertor capacity': 'ic 8' },
    // ... additional rows
  ];


  return (
    <>
      <h1>Plant Lists</h1>
      <div className='Table'>
        <br />
        <DynamicTable data={data} />
      </div>
    </>
  );
};

export default App;

