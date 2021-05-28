import React from 'react'
import './MunePage.css'
import {  DataMenuAr } from '../../Data/DataMenu'


export const MenuPageAr = () => {
    
    
    const MinMenu = DataMenuAr.map( ( { header, src, iconMinus, val, title, price }, idx ) => {
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
        <section className='menu-1'>
            <article className='container text-center '>
                <h3 className='head'> قائمه الطعام </h3>
                <p>
                    لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...
                </p>
                <div className='row'>
                    { MinMenu }
                </div>
            </article>
        </section>
    )
}
