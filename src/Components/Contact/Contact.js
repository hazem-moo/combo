import React from 'react'
import { Button } from 'reactstrap'
import './Contact.css'
import Logo17 from '../../Images/17.jpg'

const Contact = () => {
    return (
        <section className='container'>
            <div className='row min-container'>
                <div className='col-lg-6'>
                    <form className="contact">
                        <input type="text" placeholder='type yout name ' />
                        <input type="password" placeholder='type yout password ' />
                        <input type="email" placeholder='type yout email ' />
                        <textarea placeholder='type your order' />
                        <Button type='submit' className='text-center mx-auto d-block w-25' color='danger'> send </Button>
                    </form>
                </div>

                <div className='col-lg-6'>
                    <img src={ Logo17 } alt='' />
                </div>
            </div>
        </section>
    )
}

export default Contact 
