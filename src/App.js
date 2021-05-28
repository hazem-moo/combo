import React, { useState } from 'react'
import './App.css';
import { Button } from 'reactstrap'
import { BrowserRouter } from 'react-router-dom'

import LangEn from './LangEn';
import LangAr from './LangAr';


function App() {
  const [ isLang, setIsLang ] = useState( false );

  const toggle = _ => setIsLang( !isLang );

  return (
    <BrowserRouter basename='/combo' >
      <Button color='danger' onClick={ toggle } className="d-block ml-auto lang"> 
        { isLang ? "En" : "AR" }
      </Button>

      { isLang ? <LangAr /> : <LangEn /> }
    </BrowserRouter>
  );
}

export default App;
