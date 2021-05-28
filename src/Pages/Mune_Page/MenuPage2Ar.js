import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { totalMenuAr } from '../../Data/DataMenu';
import './MunePage.css'

export const MenuPage2Ar = () => {

    const [ isOpen, setIsOpen ] = useState( false );
    
    const toggle = _ => setIsOpen( !isOpen )
    
    const MinMenu = totalMenuAr.map( ( { header, src, iconMinus, val, title, price }, idx ) => {
        return (
            <div className='col-lg-6' key={ idx }>
                <div className='post'>
                    <h4 > { header } </h4>
                    <img src={ src } alt='' className=' d-block img-post w-100' />
                    <p className='title-post'> { title } </p>
                    
                    <span value={ val } > price : { price } $ </span>
                </div>
            </div>
        )
    })

    return (
        <>
        <Link onClick={ toggle } className=''  >
        <i class={` fas ${ isOpen ? ' fa-chevron-down ' : ' fa-chevron-up ' } d-block up  `}></i>
        </Link> 
        <div className={` menu-1 ${ isOpen ? 'd-block' : " d-none " } `}>
            <div className='container text-center'>
                <div className='row'>
                    { MinMenu }
                </div>
            </div>       
        </div>
        </>
    )
}
