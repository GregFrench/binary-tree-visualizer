import React, {useState} from 'react';
import Header from './components/Header.js';
import Tree from './components/Tree.js';
import Dropdown from './components/Dropdown';
import {algorithmItems, treeItems} from './utils';
import './App.css';

function App() {
  const [selectedTreeValue, setSelectedTreeValue] = useState();
  const [selectedAlgorithmValue, setSelectedAlgorithmValue] = useState();
  const [insertValue, setInsertValue] = useState(0);

  return (
    <div>
      <Header>
        <Dropdown
          title={'Tree'}
          items={treeItems}
          selectedValue={selectedTreeValue}
          setSelectedValue={setSelectedTreeValue}
        />
        <Dropdown
          title={'Algorithm'}
          items={algorithmItems}
          selectedValue={selectedAlgorithmValue}
          setSelectedValue={setSelectedAlgorithmValue}
        />
      </Header>
      <div className="container mx-auto">
        <form>
          <input
            type="number"
            name="name"
            value={insertValue}
            onChange={(e) => setInsertValue(e.target.value)} />
          <input type="button" value="Insert" onClick={() => console.log(insertValue)} />
        </form>
        <Tree type={selectedTreeValue}></Tree>
      </div>
    </div>
  );
}

export default App;
