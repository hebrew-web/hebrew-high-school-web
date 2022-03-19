import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/landing-page';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar';
import About from './components/about-page';
import Footer from './components/footer';
import ContactView from './components/contact-view';
import anime from 'animejs';
import './styles/base.sass';

function Main() {
  let [showContact, setContactState] = useState(false)
  function closeContact() {
    anime({
      targets: "#contact-view",
      opacity: [1, 0],
      easing: 'linear',
      duration: 200,
      complete: () => {
        document.body.style = "overflow:unset;height:auto;"
        setContactState(false)
      }
    })
  }
  function contactToggle(){
    setContactState(true)
  }
  return (
    <>
      {showContact &&
        <ContactView
          close={closeContact}
        />}
      <Landing contactToggle={contactToggle}/>
      <NavBar />
      <About />
      <Footer />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
