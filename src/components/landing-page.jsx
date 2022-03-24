import { useEffect, useRef } from 'react'
import ImageLink from '../icons/hhs.png'
import { FaPhoneAlt } from 'react-icons/fa'
import Typed from "typed.js";
import 'animate.css/animate.min.css'
import '../styles/landing-page.sass'
import Particles from 'react-tsparticles';
import p_options from './data/landing-particles.json'

let styles = {
    main: 'w-full h-full relative bg-gradient-to-br flex flex-col md:flex-row',
    svg: 'fill-white md:hidden',
    contactButton: `absolute bottom-[1vh] right-[1.2vw] bg-white 
        border-2 rounded-full w-14 h-14 flex opacity-80 shadow-md 
        transition-all backdrop-blur-sm transform scale(0.9) hover:opacity-100 
        hover:scale(1)`,
    iconContainer: 'z-0 absolute [perspective:_2000px]'
}

export default function Landing({ contactToggle }) {
    let elm = useRef()
    let main = useRef()
    useEffect(function () {
        let typed = new Typed('#typeText', {
            strings: [
                'Learning is fun.',
                "<span class='emphasis'>Wisdom</span> is an <span class='emphasis'>asset.</span>",
                '<span class="emphasis">Quality education</span> is our <span class="emphasis">unique trademark</span>.',
                "Education is the <span class='emphasis'>key</span> to sucess.",
                "Education is <span class='emphasis'>empowerment</span>, empowerment is <span class='emphasis'>education</span>."],
            typeSpeed: 70,
            backDelay: 2000,
            backSpeed: 40,
            startDelay: 500,
            loop: true
        })

        let el = elm.current,
            main_el = main.current
        main_el.addEventListener('mouseover', (ev) => {
            let xAxis = ((window.innerWidth / 2) - ev.pageX) / 35
            let yAxis = ((window.innerHeight / 2) - ev.pageY) / 35
            el.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`
        })
        main_el.addEventListener('mouseout', (e) => {
            el.style.transition = 'all 500ms ease'
            el.style.transform = `rotateX(0deg) rotateY(0deg)`
        })

        return () => {
            main_el.removeEventListener('mouseout', () => { })
            main_el.removeEventListener('mouseover', () => { })
            typed.destroy()
        }
    }, [])
    return (
        <>
            <div className={styles.main, 'main'} ref={main}>
                <Particles id='tsparticles' options={p_options} />
                <div className="icon-container">
                    <img src={ImageLink} alt="Hebrew Logo" ref={elm} />
                </div>
                <div className='inner'>
                    <div>
                        <h1>Hebrew Schools</h1>
                        <div>
                            <span id="typeText"></span>
                        </div>
                    </div>
                    <button className='animate__animated animate__tada' aria-label='menu' role="navigation">
                        <a href="#about">
                            Learn more
                        </a>
                    </button>
                </div>
                <button aria-label='Contact us' className='contact-button animate__fadeInLeft animate__faster animate__animated' onClick={() => contactToggle()}>
                    <FaPhoneAlt />
                </button>
                <svg version="1.1" className={styles.svg} preserveAspectRatio='none' viewBox="0 0 97.631 8.4667" xmlns="http://www.w3.org/2000/svg">
                    <path transform="scale(.26458)" d="m369 0.27344c-0.07792 0.24408-0.14308 0.48928-0.22852 0.73242-0.21619 0.6153-0.45663 1.2258-0.7246 1.8262-0.26798 0.60041-0.56368 1.1909-0.88868 1.7637-0.1625 0.28638-0.33203 0.56863-0.50976 0.8457-0.17774 0.27707-0.36301 0.54828-0.55664 0.81445s-0.3953 0.52563-0.60547 0.7793c-0.21018 0.25367-0.42887 0.50066-0.65625 0.74023s-0.46375 0.47338-0.70899 0.69727c-0.24523 0.22389-0.49992 0.43793-0.76367 0.64453s-0.53739 0.40408-0.82031 0.5918c-0.28292 0.18772-0.57421 0.36596-0.87695 0.5332-0.30275 0.16724-0.61624 0.32358-0.93946 0.46875-0.32322 0.14517-0.6576 0.27889-1.002 0.40039-0.34435 0.1215-0.69831 0.23189-1.0644 0.32812s-0.74423 0.17868-1.1328 0.24805c-0.38858 0.06937-0.78753 0.1251-1.1992 0.16602-0.41169 0.040912-0.83605 0.067265-1.2715 0.078125-0.87087 0.021719-1.7953 0.022538-2.7695 0.003906s-1.9978-0.056697-3.0644-0.11133c-1.0667-0.054632-2.176-0.12661-3.3242-0.21289s-2.3358-0.1872-3.5547-0.30078c-2.4378-0.22716-5.0052-0.50422-7.6602-0.81445-2.655-0.31024-5.3966-0.65321-8.1816-1.0117-5.57-0.71702-11.314-1.496-16.881-2.1973-2.7834-0.35063-5.522-0.68209-8.1738-0.97656-1.3259-0.14724-2.6296-0.28544-3.9062-0.41211-1.2767-0.12667-2.5276-0.242-3.7441-0.34375-1.2165-0.10175-2.3994-0.19026-3.5527-0.26562s-2.276-0.13711-3.3711-0.1875c-1.0951-0.050391-2.1634-0.088404-3.2051-0.11523-1.0417-0.02683-2.0576-0.042193-3.0508-0.046875-0.99322-0.0046821-1.9625 0.0015262-2.9121 0.017578-0.94962 0.016052-1.8801 0.0408-2.791 0.076172s-1.8026 0.081487-2.6797 0.13477c-0.8771 0.053279-1.7397 0.11382-2.5879 0.18359-0.84817 0.069772-1.6817 0.14757-2.5058 0.23242-0.82414 0.084851-1.6384 0.17687-2.4434 0.27539-1.61 0.19703-3.1872 0.42085-4.75 0.66406-1.5628 0.24322-3.1113 0.50707-4.666 0.78516-1.5547 0.27809-3.1154 0.56944-4.7012 0.87109-3.1716 0.6033-6.4436 1.2441-9.8672 1.9336-3.4236 0.68945-6.9987 1.4277-10.773 2.2324-3.7747 0.80468-7.7495 1.6741-11.975 2.623-4.2251 0.94899-8.7 1.9772-13.475 3.0996-2.3873 0.56119-4.8485 1.1469-7.3887 1.7402-2.5402 0.59329-5.16 1.1954-7.8594 1.791-2.6994 0.59565-5.4789 1.1857-8.3438 1.7539-1.4324 0.28413-2.8864 0.56228-4.3613 0.83398s-2.9719 0.53546-4.4902 0.79102c-1.5183 0.25556-3.0567 0.50259-4.6191 0.73828-1.5624 0.23569-3.1485 0.45976-4.7559 0.67188-1.6073 0.21211-3.2376 0.41284-4.8906 0.59766s-3.3278 0.35402-5.0273 0.50781c-1.6995 0.15379-3.4231 0.2911-5.1699 0.41016-1.7468 0.11906-3.5177 0.22018-5.3125 0.30078-1.7948 0.080603-3.6133 0.14126-5.457 0.17969-1.8437 0.038429-3.7122 0.054337-5.6055 0.046875-1.8933-0.007463-3.8116-0.037539-5.75-0.089844-1.9384-0.052306-3.8975-0.12547-5.8711-0.2168s-3.9619-0.20164-5.9609-0.32617c-1.999-0.12453-4.0089-0.2641-6.0234-0.41602-2.0146-0.15191-4.0344-0.31676-6.0547-0.49023-2.0203-0.17347-4.0405-0.35571-6.0566-0.54492-4.0323-0.37843-8.0472-0.78298-12.004-1.1895s-7.8558-0.81516-11.658-1.2031c-3.8024-0.38796-7.5069-0.75524-11.076-1.0781-1.7846-0.16144-3.5345-0.31082-5.2461-0.44726-1.7116-0.13644-3.3849-0.25961-5.0137-0.36524-1.6287-0.10562-3.214-0.19469-4.75-0.26367-1.536-0.06898-3.0236-0.11801-4.457-0.14453-0.71672-0.01326-1.4254-0.016681-2.1289-0.011719-0.70347 0.004962-1.4016 0.018641-2.0918 0.041016-0.69022 0.022374-1.3738 0.05282-2.0508 0.091797s-1.3461 0.085855-2.0098 0.14062c-1.3273 0.10954-2.6282 0.25011-3.9023 0.41797-1.2741 0.16785-2.5214 0.36429-3.7422 0.58398s-2.4166 0.46346-3.584 0.72852c-1.1674 0.26505-2.308 0.55154-3.4219 0.85547-1.1139 0.30393-2.1995 0.6246-3.2598 0.96094-1.0603 0.33634-2.095 0.68852-3.1016 1.0508s-1.9867 0.73547-2.9395 1.1172c-0.9528 0.38171-1.8784 0.77133-2.7773 1.166s-1.7703 0.79413-2.6152 1.1953c-0.84489 0.40118-1.6623 0.80388-2.4531 1.2051-0.41517 0.21063-0.80289 0.41768-1.2031 0.62695v0.17383h369v-31.727z" />
                </svg>
            </div>
        </>
    )

}
