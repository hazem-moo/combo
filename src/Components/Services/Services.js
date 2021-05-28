import React, { Fragment } from 'react'
import { LogoMenu } from '../../Pages/Mune_Page/LogoMenu'
import { ServicePage2 } from '../../Pages/Services_Page/ServicePage2'
import ServicesPage from '../../Pages/Services_Page/ServivesPage'


const ServicesComponent = () => {
    return (
        <Fragment>
         <LogoMenu />
         <ServicesPage />
         <ServicePage2 />
        </Fragment>
    )
}

export default ServicesComponent
