import React  from 'react'
import './MunePage.css'
import { DataMenu } from '../../Data/DataMenu'


export const MenuPage = () => {
    

    const MinMenu = DataMenu.map( ( { header, src, iconMinus, val, title, price }, idx ) => {
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
                <h3 className='head'> Food Menu </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod </p>
                <div className='row'>
                    { MinMenu }
                </div>
            </article>
        </section>
    )
}
