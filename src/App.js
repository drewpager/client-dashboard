import React, { useEffect, useState } from 'react';
import './App.css';
import { renderButton, checkSignedIn } from './utils';
import { Report } from './report';
import { Header } from './components/header';

export const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSignin = (signedIn) => {
    setIsSignedIn(signedIn);
    if(!signedIn) {
      renderButton();
    }
  };

  const init = () => {
    checkSignedIn()
    .then((signedIn) => {
      updateSignin(signedIn);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    window.gapi.load("auth2", init);
  });

  return (
    <div className="App">
      {!isSignedIn ? (
        <div id="signin-button"></div>
      ) : (
        <>
          <Header />
          <Report />
        </>
      )}
    </div>
  );
}

export default App;
