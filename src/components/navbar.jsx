import { useEffect, useRef, useState } from "react";
// import {ReactComponent as HHSIcon} from '../icons/hhs.svg'
import '../styles/navbar.sass'

const MenuIcon = (
   <svg version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="m2.2735 4.6959h11.453c0.8423 0 1.5204 0.51558 1.5204 1.156s-0.67811 1.156-1.5204 1.156h-11.453c-0.84231 0-1.5204-0.51558-1.5204-1.156s0.67811-1.156 1.5204-1.156z" fillRule="evenodd" strokeWidth="1.0086"/>
      <g transform="translate(-.21048 2.0401)" fillRule="evenodd">
         <path d="m5.1686 6.844h8.708c0.64042 0 1.156 0.51558 1.156 1.156s-0.51558 1.156-1.156 1.156h-8.708c-0.64042 0-1.156-0.51558-1.156-1.156s0.51558-1.156 1.156-1.156z" strokeWidth=".8795"/>
         <path d="m3.4916 8a1.264 1.264 0 0 1-1.264 1.264 1.264 1.264 0 0 1-1.264-1.264 1.264 1.264 0 0 1 1.264-1.264 1.264 1.264 0 0 1 1.264 1.264z"/>
      </g>
   </svg>
)


export default function NavBar(){

   const links = useRef()
   const nav = useRef()
   const [menuState, setMenuState] = useState(false)

   function linkClicked(ev){
      ev.preventDefault()
      let link = ev.currentTarget
      let children = [...links.current.children]
      children.forEach(
         el => el.classList.remove('active')
      )
      link.parentElement.classList.add('active') 
      setMenuState(false) 
   }

   useEffect(()=>{
      let observer = new IntersectionObserver(([el])=>{
         let classList = el.target.classList
         if(el.intersectionRatio <1) classList.remove('hidden')
         else classList.add('hidden')
      }, {threshold: [1]})
      observer.observe(nav.current)

      let currNav = nav.current
      return ()=>{
         observer.unobserve(currNav)
      }
   }, [])

   
   return (
      <nav ref={nav} className="hidden">
         <div>
            
            <div>
               <span>HHS</span>
               <span>Education is fun</span>
            </div>
            <button onClick={()=>setMenuState(!menuState)}>
               {MenuIcon}
            </button>
         </div>
         <ul ref={links} toggled={menuState.toString()}>
            <li className="active">
               <a href="#home" onClick={linkClicked}>Home</a>
            </li>
            <li>
               <a href="#about" onClick={linkClicked}>About</a>
            </li>
            <li>
               <a href="#contact" onClick={linkClicked}>Contact</a>
            </li>
            <li>
               <a href="#me" onClick={linkClicked}>Me</a>
            </li>
         </ul>
      </nav>
   )

}
