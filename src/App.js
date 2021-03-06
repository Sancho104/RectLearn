
import './App.css';
import React from "react";
import Header from './components/Header/header';
import Menu from './components/Left-menu/left-menu';
import Dialogs from './components/Content/ContentIn/Dialogs/Dialogs';
// import Dialogs from './components/Content/ContentMessage/ContentMessage';
import { BrowserRouter, Route } from 'react-router-dom';
import User from './components/Content/ContentIn/User/User';
import News from './components/Content/ContentIn/News/News';
import Search from './components/Content/ContentIn/Search/Search';
import Login from './components/Content/ContentIn/Login/Login';
import Posts from "./components/Content/ContentIn/Posts/Posts";


// const SomeComponent = () => {
//   return <Dialogs />
// }

const App = (props) => {
  // console.log(props.dataDialogs);
  // console.log(props.dataMessage);
  // debugger;
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <div className='content-wrap'>

          <Menu dialogsData={props.state.dialogsPage.dialogsData} />


          <div className='content-delta'>
            <Route path='/posts' render={() => (
              <Posts
                postsPage={props.state.postsPage}
                addPost={props.addPost}
                newPostText={props.state.postsPage.newPostText}
                updateNewPostText={props.updateNewPostText}
              />
            )} />
            <Route path='/news' render={() => <News newsData={props.state.newsData} />} />
            <Route path='/user' component={User} />
            <Route path='/search' component={Search} />
            <Route path='/dialogs'
              render={() => <Dialogs dialogsPage={props.state.dialogsPage} />} />
            <Route path='/login' component={Login} />

          </div>

        </div>
      </div>
    </BrowserRouter>

  );
}


export default App;


