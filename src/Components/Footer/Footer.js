import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const formRaf = useRef();

    const focus = _ => formRaf.current.focus()

    return (
        <footer className='footer '>  
            <div  className='overlay'></div>
            <div className='container content mx-auto' >
                <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <form className='mx-auto '>
                    <input type="search" placeholder='write your foot' ref={ formRaf } />
                    <Link >
                        <i className='fas fa-search' onClick={ focus }></i>
                    </Link>
                </form>

                <div className='social mx-auto'>
                    <Link to='' > <i className='fab fa-facebook'></i> </Link>
                    <Link to='' > <i className='fab fa-youtube'></i> </Link>
                    <Link to='' > <i className='fab fa-twitter'></i> </Link>
                    <Link to='' > <i className='fab fa-instagram'></i> </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
