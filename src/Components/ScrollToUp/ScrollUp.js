import React, { useEffect, useRef, useState } from 'react'
import { animateScroll } from 'react-scroll'
import './ScrollUp.css'

const ScrollUp = () => {
    const [ isShow, setIsShow] = useState( false )
    const upRef = useRef()

    useEffect( () => {
        window.addEventListener( "scroll", () => {
            if ( window.scrollY >= 1000 ) {
                setIsShow( true )  
            } else {
                setIsShow( false )
            }
        })
         
    }, [] )
    return (
        <div
            ref={ upRef }
            className={ ` ${ isShow ? "d-block" : "d-none" } scroll-up ` } 
            onClick={ () => animateScroll.scrollToTop( ) }
        >
            <i class="fas fa-angle-double-up fa-2x text-center rounded-circle " ></i>
        </div>
    )
}

export default ScrollUp
