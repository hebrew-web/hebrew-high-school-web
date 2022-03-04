
import '../styles/about-page.sass'


function About() {
    return (
        <div className='about-page'>
            <section>
                <h2>About us</h2>
                <p>
                    <span className="emphasis">Hebrew High School </span> 
                    is one of the states leading private school. Tailored with the best teachers, serene laboratories with adequate equipments
                    to supply your ward with quality and give them best form of education possible.
                </p>
            </section>
            <section>
                <h2>Our mission</h2>
                <p>
                    Our mission as a school is to ensure that all students from <span className="emphasis">toddler </span> 
                    to <span className="emphasis">teenager </span> are taught till the best in them
                    is unleashed. With God by our side, your ward will recieve the best education availiable.
                </p>
            </section>
        </div>
    )
}

export default About;