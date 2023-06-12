import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Page from './login/Page';
import inc from './Redux/inc';


const App = () => {
  return (
    <div>
      <Home/> <br/>

      <About/>  <br/>

      <Product/> <br/>

      <inc/> <br/>

       <Page/> <br/>

    </div>
  )
}

export default App
