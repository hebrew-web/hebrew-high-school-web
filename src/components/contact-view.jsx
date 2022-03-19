import anime from "animejs";
import { useEffect, useRef } from "react";
import { FaFacebook, FaGoogle, FaWhatsapp } from 'react-icons/fa';
import { BsX, BsCheck2 } from 'react-icons/bs'
import '../styles/contact-view.sass'
import '../styles/_custom-radio.sass'
import '../styles/_social-btn.sass'

function CustomRadio({ label, name, setValue, id }) {
    return (
        <>
            <div className="custom-radio">
                <input type="radio" name={name} id={id} onChange={() => { if (typeof setValue === 'function') setValue() }} />
                <span className="checkbox">
                    <BsCheck2 />
                </span>
                <label htmlFor={id}>{label}</label>
            </div>
        </>
    )
}
function SocialButton({label, icon}){
    return (
        <div className="social-btn">
            {icon}
            <span>{label}</span>
        </div>
    )
}
export default function Contact(props) {

    let contact = useRef()
    let form = useRef()
    useEffect(() => {
        anime({
            targets: contact.current,
            opacity: [0, 1],
            easing: 'linear',
            duration: 300
        })
        document.body.style = "overflow:hidden;height:100vh;"

        let inputs = [...form.current.querySelectorAll('div>input')]

        inputs.forEach(el => {
            el.addEventListener('focus', (ev) => {
                let label = ev.target.previousSibling
                if (ev.target.value === "") label.classList.toggle("inactive")
            })
            el.addEventListener('blur', (ev) => {
                let label = ev.target.previousSibling
                console.log(ev.target.value)
                if (ev.target.value === "") label.classList.toggle("inactive")
            })
        })

        return () => {
            inputs.forEach(el => el.removeEventListener('focus', () => { }))
            inputs.forEach(el => el.removeEventListener('blur', () => { }))
        }

    }, [])
    return (
        <div className="contact" ref={contact} id="contact-view">
            <section>
                {/* <img src={ImageLink} /> */}
                <h2>
                    <span className="emphasis"> Contact HHS</span>
                    <button onClick={() => props.close()}>
                        <BsX />
                    </button>
                </h2>
                <form action="" ref={form}>
                    <div className="form-group-input">
                        <label htmlFor="name" className="">Full Name</label>
                        <input type="text" id="name" autoFocus={true} />
                    </div>
                    <div className="form-group-input">
                        <label htmlFor="email" className="inactive">Email address</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="message">
                        <label htmlFor="message">Your message</label>
                        <textarea></textarea>
                    </div>
                    <div className="who">
                        <CustomRadio id={'parent'} name={"who"} label="Parent" />
                        <CustomRadio id={'student'} name={"who"} label="I am your student" />
                        <CustomRadio id={'visitor'} name={"who"} label="Visitor" />
                        <CustomRadio id={'student-2'} name={"who"} label="I am your former student" />
                    </div>
                    <div className="buttons">
                        <button>Send</button>
                        <button>Call</button>
                    </div>
                    <div className="social">
                        <SocialButton label='facebook' icon={<FaFacebook />} />
                        <SocialButton label='whatsapp' icon={<FaWhatsapp />} />
                        <SocialButton label='gmail'    icon={<FaGoogle />} />
                    </div>
                </form>
            </section>
        </div>
    )
}
