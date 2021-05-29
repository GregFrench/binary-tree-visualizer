import React, {useState} from 'react';
import Header from './components/Header.js';
import Tree from './components/Tree.js';
import Dropdown from './components/Dropdown';
import {algorithmItems, treeItems} from './utils';
import './App.css';

function App() {
  const [selectedTreeValue, setSelectedTreeValue] = useState();
  const [selectedAlgorithmValue, setSelectedAlgorithmValue] = useState();

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
        <Tree type={selectedTreeValue}></Tree>
      </div>
    </div>
  );
}

export default App;
