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
            'Quality education brings out the best in them',
            "Education is the <span class='emphasis'>key</span> to sucess",
            "Education is <span class='emphasis'>empowerment</span>, empowerment is <span class='emphasis'>education</span>"],
           typeSpeed: 90,
           backDelay: 2000,
           backSpeed: 40,
           startDelay: 500,
           loop:true
        })
        
        let el = document.querySelector('.main > .icon-container > svg')
        document.querySelector('.main').addEventListener('mouseover', (ev)=>{
            let xAxis = ((window.innerWidth / 2) - ev.pageX ) / 35
            let yAxis = ((window.innerHeight / 2) - ev.pageY ) / 35
            el.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`
        })
        document.querySelector('.main').addEventListener('mouseout', (e)=>{
            el.style.transition = 'all 500ms ease'
            el.style.transform = `rotateX(0deg) rotateY(0deg)`  
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
