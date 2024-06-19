import { useState } from 'react';
import './App.css';
import ClassComp from './ClassComp.js';
import FuncComp from './FuncComp.js';

function App() {
  let [showFunc, setStateShowFunc] = useState(true);
  let [showClass, setStateShowClass] = useState(true);
  return (
    <div className="container">
      Hello World!!
      <input type="button" value={showFunc ? 'FuncComponent hide' : 'FuncComponent show'}
        onClick={() => {
          setStateShowFunc(!showFunc);
        }}></input>
      <input type="button" value={showClass ? 'ClassComponent hide' : 'ClassComponent show'}
        onClick={() => {
          setStateShowClass(!showClass);
        }}></input>
      {showFunc ? <FuncComp initNumber={2} /> : ""}
      {showClass ? <ClassComp initNumber={2} /> : ""}
    </div>
  );
}

export default App;
