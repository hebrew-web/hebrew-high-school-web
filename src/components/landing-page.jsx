import { useEffect } from 'react'
import { ReactComponent as HHSIcon } from '../icons/hhs.svg'
import Typed from "typed.js";
import 'animate.css/animate.css'
import '../styles/landing-page.sass'

export default function Landing (){
    useEffect(function () {
        new Typed('#typeText', {
           strings: [
            'Learning is fun.',
            'Learning is the only road to success',
            'Quality education brings out the best in them',
            "Education is the <span class='emphasis'>key</span> to sucess"],
           typeSpeed: 90,
           backDelay: 2000,
           backSpeed: 40,
           startDelay: 500,
           loop:true
        })
    }, [])

    return (
        <div className="main">
        
            <div className="icon-container">
                <HHSIcon />
            </div>
            <div className='inner'>
                <div>
                    <h1>Hebrew High School</h1>
                    <div>
                        <span id="typeText"></span>
                    </div>
                </div>
                <button >
                    <a href="#about">
                        Learn more
                    </a>
                </button>
            </div>
        </div>
    )
    
}