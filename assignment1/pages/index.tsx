import React from 'react';
import Navbar from '../componets/navbar';
import MoneyCounter from '../componets/moneyCounter';
import { useState } from 'react';
import Aboutme from '../componets/Aboutme';

export default function App() {
  //this variable tracks which page i am on
  const [view, setView] = useState('Home');

  //this switch choses which paeg to show based on what i click.
  const PagesContent = () => {
    switch (view) {
      case 'Home': 
        return <h1 style={{ padding: '10px', fontSize: '40px', textAlign: 'center' }}>Welcome To My Home Page</h1>
      case 'Money Counter':
        return <MoneyCounter/>;
      case 'About Me':
        return <Aboutme />
      default:
        return <h1 style={{ padding: '10px', fontSize: '40px', textAlign: 'center' }}>Welcome To My Home Page</h1>
    }
  };

  //this is the navbar where when you click the button it will go to the pages like home,money and about me
  return (
    <div>
      {/*  */}
      <Navbar onNavigate={setView} />

      {/*this is the middle of the page where the text or button will appear */}
      <div style={{textAlign: 'center'}}>
        {PagesContent()}
      </div>
    </div>
  );
}