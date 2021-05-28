import React from 'react'
import { Fragment } from 'react'
import { LogoMenu } from '../../Pages/Mune_Page/LogoMenu'
import { MenuPage2Ar } from '../../Pages/Mune_Page/MenuPage2Ar'
import { MenuPageAr } from '../../Pages/Mune_Page/MenuPageAr'


const MenuAr = () => {
    return (
        <Fragment>
            <LogoMenu />
            <MenuPageAr />   
            <MenuPage2Ar />
        </Fragment>
    )
}

export default MenuAr
