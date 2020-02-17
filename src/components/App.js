import React from 'react';
import './styles/App.css';
import { Topbar } from './components/Topbar'
import { Register} from "./components/Register"

function App() {
  return (
    <div className="App">
      <Topbar> </Topbar>
        <Register></Register>
    </div>
  );
}

export default App;

