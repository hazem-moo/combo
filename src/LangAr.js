import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutAr from './Components/About/AboutAr'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import HomeAr from './Components/Home/HomeAr'
import MenuAr from './Components/Memu/MenuAr'
import MyNavAr from './Components/MyNav/MyNavAr'
import ScrollUp from './Components/ScrollToUp/ScrollUp'
import ServicesAr from './Components/Services/ServicesAr'


const LangAr = () => {
    return (
        <BrowserRouter basename='/combo' >
            <section className='Ar'>
                <MyNavAr />
                <ScrollUp />
                <Switch>
                    <Route path='/' exact component={ HomeAr } />
                    <Route path='/ServicesAr' component={ ServicesAr } />
                    <Route path='/MenuAr' component={ MenuAr } />
                    <Route path='/AboutAr' component={ AboutAr } />
                    <Route path='/Contact' component={ Contact } />
                </Switch>
                <Footer />
            </section>
        </BrowserRouter>
    )
}

export default LangAr
