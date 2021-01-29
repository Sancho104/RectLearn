
import './App.css';
import React from "react";
import Header from './header';
import Menu from './left-menu';
import Content from './content';



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


