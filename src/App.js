import Header from './components/Header.js';
import Tree from './components/Tree.js';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <Tree></Tree>
      </div>
    </div>
  );
}

export default App;
