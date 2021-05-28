import React from 'react'
import './Services.css'
import Logo7 from '../../Images/7.jpg'


const ServivesPage = () => {
    return (
        <section className='service text-center'>
            <h3> Why is it special? </h3>
            <div className='underline'></div>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod </p>
            <div className='underline'></div>

            <article className='service-overlay' >
                <div className='container' >
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='service-post'>
                                <h4> What We offer </h4>
                                <p> 
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>

                    <div className='col-lg-6'>
                        <img className='img-fluid ' alt='' src={ Logo7 } />
                        <img className='img-fluid ' alt='' src={ Logo7 } />
                    </div>
                    </div>
                </div>
            </article>
            </section>
    )
}

export default ServivesPage