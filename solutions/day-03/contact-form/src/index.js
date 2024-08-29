import React from 'react';
import ReactDOM from 'react-dom';


const subscribe = 'SUBSCRIBE';
const title = 'Sign up with your email address to receive news and updates';

const inputMain = (
  <form className='form-wrapper'>
    <input type='text' placeholder='First Name'></input>
    <input type='text' placeholder='Last Name'></input>
    <input type='text' placeholder='Email'></input>
  </form>
)

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{subscribe}</h1>
      <p>{title}</p>
      {inputMain}
      <button>Subscribe</button>
  
    </div>
    
  </header>
)

const app = (
  <div className='app'>
    {header}
    
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)