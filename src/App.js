import './App.css';

import landscape1 from "./assets/pine-watt-unsplash.jpg"

import "./assets/Tabs.css"

function App() {
  
  const selectTabFunction = function() {
    const selectTab = document.querySelectorAll(".tabs__info__menu li")

    selectTab.map((tab) => {
      tab.addEventListener('click', function() {
        alert("test")
      })
    })
  }


  return (
    <div className="App">
      <h1>React Tabs</h1>

      <div className='tabs__container'>
          <div className='tabs__img'>
            <img src={landscape1} width={200} height={200} alt="Landscape1"/>
          </div>

          <div className='tabs__info'>
            <nav className="tabs__info__menu">
              <ul>
                <li className="selected">History</li>
                <li>Vision</li>
                <li>Goals</li>
              </ul>
            </nav>

            <div className="tabs__info__description">
              <h3>History</h3>
              <p>
                Text - Lorem Ipsum
              </p>
            </div>

          </div>
      </div>
    </div>
  );
}

export default App;
