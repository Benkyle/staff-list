import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './Robots';
import Searchbox from './Searchbox'
import Header from './Header';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>


        <div className='tc'>
          <div>
            <Header/>
          </div>
          <div>
          <Searchbox/>
          </div>
          <div>
          {
            robots.map((robot) => {
              return <Card 
              id={robot.id} 
              name={robot.name} 
              username={robot.username} 
              email={robot.email} 
              img={robot.img} 
              />
            })
          }
      <div>
        <Footer/>
      </div>
      </div>
      </div> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
