
import './App.css';
import React from "react";
import Header from './components/Header/header';
import Menu from './components/Left-menu/left-menu';
import Dialogs from './components/Content/Dialogs';
// import Dialogs from './components/Content/ContentMessage/ContentMessage';
import { BrowserRouter, Route } from 'react-router-dom';
import User from './components/Content/ContentIn/User/User';
import News from './components/Content/ContentIn/News/News';
import Search from './components/Content/ContentIn/Search/Search';
import Login from './components/Content/ContentIn/Login/Login';



// function formatName(user) {
//   return user.fN + ' ' + user.lN;
// }

// const user = {
//   fN: 'Vasia',
//   lN: 'Pupkin',
// };

// const name = 'idiot';

// const button = document.getElementById('id1');
// button.addEventListener('click', function(){
//   <Content className='hidden' />
// })

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <div className='content-wrap'>
          <Menu />

          <div className='content-delta'>
            <Route path='/news' component={News} />
            <Route path='/user' component={User} />
            <Route path='/search' component={Search} />
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/login' component={Login} />

          </div>

        </div>
      </div>
    </BrowserRouter>

  );
}


export default App;


