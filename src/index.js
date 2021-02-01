import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Vasiliy' },
  { id: 2, name: 'Hryn`' },
  { id: 3, name: 'Sulimka' },
  { id: 4, name: 'Anatolivna' }
];
let messageData = [
  { id: 1, message: 'Hi, idiot!' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Are you fine?' },
  { id: 4, message: 'Shut up, bitch!' }
];
let postsData = [
  { id: 1, message: 'Crap!!!!!!!', likesCount: 10, src: 'https://s7g3.scene7.com/is/image/soloinvest/n11346A?$big_image_web$'},
  { id: 2, message: 'Shit!!!!!!!', likesCount: 5, src: 'https://s7g3.scene7.com/is/image/soloinvest/n11346A?$big_image_web$'},
  { id: 3, message: 'Lol!!!!!!!', likesCount: 50, src: 'https://s7g3.scene7.com/is/image/soloinvest/n11346A?$big_image_web$'},
];
let newsData = [
  {id: 1, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'It`s a bich'},
  {id: 2, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'It`s a not bich'},
  {id: 3, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'It`s a bich'},
  {id: 4, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'On the way to the publick home'},
  {id: 5, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'It`s a bich'},
];


  ReactDOM.render(
    <App dataDialogs ={dialogsData} dataMessage={messageData} postsData={postsData} newsData={newsData}/>,
    document.getElementById('root')
  );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
