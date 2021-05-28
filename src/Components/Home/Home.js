import React, { Fragment } from 'react'
import HomeEn from '../../Pages/Home/HomeEn'
import { MenuPage } from '../../Pages/Mune_Page/MenuPage'
import ServicesPage from '../../Pages/Services_Page/ServivesPage'

const HomeComponentEn = () => {
    return (
        <Fragment>
         <HomeEn />
         <MenuPage />
         <ServicesPage />
        </Fragment>
    )
}

export default HomeComponentEn
