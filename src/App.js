import logo from './logo.svg';
import './App.css';
import { StrictMode, useEffect } from 'react';
import Vocabulary from './component/Vocabulary';

function App() {


  console.log("parent body")
  return (
    <StrictMode>
    <div className="App">
      <Vocabulary />
    </div>
    </StrictMode>
  );
}

export default App;
