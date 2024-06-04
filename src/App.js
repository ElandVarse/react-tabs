import './App.css';

import React, { useEffect } from 'react';
import landscape1 from "./assets/pine-watt-unsplash.jpg"

import "./assets/Tabs.css"
import selectTabFunction from "./assets/utils"

function App() {

  useEffect(() => {
    selectTabFunction()
  })

  return (
    <div className="App">

      <div className='tabs__container'>
        <h1 className='tabs_title'>React Tabs</h1>
        <p className='tabs_subtitle'>Exactly what it looks like</p>

        <div className='tabs__content'>
            <div className='tabs__img'>
              <img src={landscape1} width={200} height={200} alt="Landscape1"/>
            </div>

            <div className='tabs__info'>
              <ul className="tabs__info__menu">
                <li className="selected">History</li>
                <li>Vision</li>
                <li>Goals</li>
              </ul>

              <div className="tabs__info__description">
                <b>History</b>
                <p>
                  I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.
                </p>
              </div>

            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
