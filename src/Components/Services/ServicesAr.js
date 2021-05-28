import React, { Fragment } from 'react'
import { LogoMenu } from '../../Pages/Mune_Page/LogoMenu'
import { ServicePage2Ar } from '../../Pages/Services_Page/ServicePage2Ar'
import ServicePageAr from '../../Pages/Services_Page/ServicePageAr'


const ServicesAr = () => {
    return (
        <Fragment>
         <LogoMenu />
         <ServicePageAr />
         <ServicePage2Ar />
        </Fragment>
    )
}

export default ServicesAr
