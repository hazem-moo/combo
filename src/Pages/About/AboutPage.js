import React from 'react'
import { LogoMenu } from '../Mune_Page/LogoMenu'
import './About.css'
import Logo from '../../Images/+1.jpg'

export const AboutPage = () => {
    return (
        <>
         <LogoMenu />
         <section className='container about'>
            <div className='row'>
                <div className='col-lg-6'>
                    <article className='post'>
                        <h4 > about our resturant </h4>
                        <p> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </article>
                </div>

                <div  className='col-lg-6'>
                    <div className='post-img overflow-hidden mb-5'>
                        <img src={ Logo } alt='' className='w-100 ' />                
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}
