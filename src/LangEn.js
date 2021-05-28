import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MyNavEn from './Components/MyNav/MyNavEn'
import Menu from './Components/Memu/Menu'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import ScrollUp from './Components/ScrollToUp/ScrollUp'
import Contact from './Components/Contact/Contact'

const LangEn = () => {
    return (
        <BrowserRouter basename='/combo' >
            <MyNavEn />
            <ScrollUp />
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/Menu" component={ Menu } />
                <Route path='/Services' component={ Services } />
                <Route path='/About' component={ About } />
                <Route path='/Contact' component={ Contact } />
            </Switch>
            <Footer />
0        </BrowserRouter>
    )
}

export default LangEn
