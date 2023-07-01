import React from 'react';
import './App.css';
import { getTodaysDate } from './utils/date';

const App = () => {
  const loadImages = () => {
    let todaysDate = getTodaysDate();
    let photosBasePath = 'http://192.168.1.115/plant-photos/';

    const img = new Image();
    img.src = photosBasePath + '2023-06-23' + '.jpg'; console.log(photosBasePath + todaysDate + '.jpg');
    img.onload = () => { console.log('loaded') };
    img.onerror = () => { console.log('failed') };

    return <img src={img.src}/>;
  }

  return (
    <div className="App">
      <div className="App__slider">
        {loadImages()}
      </div>
    </div>
  );
}

export default App;
