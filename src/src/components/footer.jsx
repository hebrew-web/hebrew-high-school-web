// import { useRef, useState } from "react";
import { FaFacebook, FaGoogle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { ReactComponent as LocationOnMap } from '../icons/location-on-map.svg'
import '../styles/footer.sass'

export default function Footer(){

    return (
        <div className="footer">
            <div className="meta">
                <div>
                    <LocationOnMap className='map' />
                    <span>97 Atamunu street, Calabar<br />
                    Cross River, Nigeria</span>
                </div>
                <div className="social-media">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                        <span>Facebook Group</span>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                        <span>
                            <span className="emphasis">+234</span>805555555
                        </span>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaPhoneAlt />
                        <span>
                            <span className="emphasis">+234</span>805555555
                        </span>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaGoogle />
                        <span>hebrewgroupofschools@gmail.com</span>
                    </a>
                </div>
            </div>
            <div className='copyright'>
                <span>Courtsey: HHS Poineer Students</span>
                <span>&copy; 2020</span>
                {/* A little navigation bar, emailing list, events, copyright && developers */}
            </div>
        </div>
    )
}