import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/landing-page';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar';
import About from './components/about-page';
import Footer from './components/footer';
import './styles/base.sass'

ReactDOM.render(
  <React.StrictMode>
   <Landing />
   <NavBar />
   <About />
   <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
