import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Sidebar from './componnents/Sidebar';
import Main from './componnents/Main';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Main />
        </div>
        
       
      </div>
      
    </div>
  );
}

export default App;
