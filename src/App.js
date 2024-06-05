import './App.css';

import React, { useEffect, useState } from 'react';

import "./assets/Tabs.css"
import selectTabFunction from "./assets/utils"

function App() {

  var tabData = [
    {
      "id": 1,
      "title": "History",
      "content": "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
      "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {
      "id": 2,
      "title": "Vision",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris tellus, blandit pretium malesuada sed, molestie sit amet est. Nullam egestas rhoncus velit, vitae porttitor erat scelerisque et. Aliquam erat volutpat. Duis imperdiet mi at nibh fringilla, ac efficitur lacus facilisis. Donec id turpis quis massa tempor fermentum ut at mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vestibulum feugiat consectetur.",
      "image": "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {
      "id": 3,
      "title": "Goals",
      "content": "Nam sit amet est id odio tristique efficitur. Quisque orci lacus, ultrices et mi ac, consectetur aliquam neque. Nulla sit amet neque lectus. Nunc ac lorem elementum, porttitor massa at, tempor ex. Integer molestie leo et congue tincidunt. Sed elementum ligula libero, quis convallis turpis venenatis et. Maecenas molestie pharetra felis eu eleifend.",
      "image": "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  
  useEffect(() => {
    tabData.map((item) => {
      console.log("aaa", item.title)
    })

    selectTabFunction(tabData)
  })

  return (
    <div className="App">

      <div className='tabs__container'>
        <h1 className='tabs_title'>React Tabs</h1>
        <p className='tabs_subtitle'>Exactly what it looks like</p>

        <div className='tabs__content'>
            <div className='tabs__img'>
              <img id="tab-img" src={tabData[0].image} width={200} height={200} alt="Landscape1"/>
            </div>

            <div className='tabs__info'>
              <ul className="tabs__info__menu">
                {tabData.map((item, index) => {
                    if(index===0){
                      return <li value={index} key={index} className='selected'>{item.title}</li>  
                    }
                    else{
                      return <li value={index} key={index}>{item.title}</li>
                    }
                  })
                }
              </ul>

              <div className="tabs__info__description">
                <b className='tabs__description__title'>History</b>
                <p className='tabs__description__text'>{tabData[0].content}</p>
              </div>

            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
