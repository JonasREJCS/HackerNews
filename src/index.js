import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// tbm é valido
//ReactDOM.render(<h1>OLAR</h1>, document.getElementById('root'));


ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot){
    module.hot.accept();
}
