import React from 'react';
import './App.css';
import { getTodaysDate } from './utils/date';

const App = () => {

  const loadImages = () => {
    let todaysDate = getTodaysDate();
    const curUrl = window.location.href;
    let photosBasePath = '/var/www/html/plant-photos/';
    let baseDate = '2020-07-24'; // for demo/dev purposes

    if (curUrl.indexOf('localhost') !== -1) {
      photosBasePath = curUrl + 'plant-photos-dev/';
      todaysDate = baseDate;
    }

    const img = new Image();
    img.src = photosBasePath + todaysDate + '.jpg'; console.log(photosBasePath + todaysDate + '.jpg');
    img.onload = () => { console.log('loaded') };
    img.onerror = () => { console.log('failed') };
  }

  return (
    <div className="App">
      {loadImages()}
    </div>
  );
}

export default App;
