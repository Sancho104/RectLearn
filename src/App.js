
import './App.css';
import React from "react";
import Header from './components/Header/header';
import Menu from './components/Left-menu/left-menu';
import Content from './components/Content/content';



// function formatName(user) {
//   return user.fN + ' ' + user.lN;
// }

// const user = {
//   fN: 'Vasia',
//   lN: 'Pupkin',
// };

// const name = 'idiot';

const App = () => {
return (
  <div className='wrapper'>
    <Header />
    <div className='content-wrap'>
    <Menu />
    <Content />
    </div>
  </div>
  
  );
}


export default App;


