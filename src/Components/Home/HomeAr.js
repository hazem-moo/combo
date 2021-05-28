import React, { Fragment } from 'react'
import HomeEn from '../../Pages/Home/HomeEn'
import { MenuPageAr } from '../../Pages/Mune_Page/MenuPageAr'
import ServicePageAr from '../../Pages/Services_Page/ServicePageAr'


const HomeAr = () => {
    return (
        <Fragment>
         <HomeEn />
         <MenuPageAr />
         <ServicePageAr />
        </Fragment>
    )
}

export default HomeAr
