import React from 'react';
import Body from '../body/Body';
import Footez from '../footez/Footez';
import Header from '../header/Header';
import "./home.css"

function Home(){
  return (
    <div className="home">
       <div>
        <Header/>
      </div>
     
      <div>
        <Body/>
      </div>
      <div>
        <Footez/>
      </div>
      
    </div>
  );
};

export default Home;