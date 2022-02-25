
import '../styles/about-page.sass'

function AboutCard({ text, imageLink }, key) {
    console.log(text, imageLink)
    return (
        <div className="about-card" key={key}>
            <div>
                <img src={imageLink} alt="" />
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}

function About() {
    const data = [
        {
            imageLink: '/favicon.ico',
            text: `
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Aliquam eveniet incidunt perferendis eaque nam ea accusamus
             rem, quasi dolores temporibus alias quae amet iste ut
             reiciendis debitis commodi, impedit ratione.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Aliquam eveniet incidunt perferendis eaque nam ea accusamus
             rem, quasi dolores temporibus alias quae amet iste ut
             reiciendis debitis commodi, impedit ratione.
            `
        },
        {
            imageLink: '/favicon.ico',
            text: `
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Aliquam eveniet incidunt perferendis eaque nam ea accusamus
             rem, quasi dolores temporibus alias quae amet iste ut
             reiciendis debitis commodi, impedit ratione.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Aliquam eveniet incidunt perferendis eaque nam ea accusamus
             rem, quasi dolores temporibus alias quae amet iste ut
             reiciendis debitis commodi, impedit ratione.
            `
        },
        {
            imageLink: '/favicon.ico',
            text: `
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Aliquam eveniet incidunt perferendis eaque nam ea accusamus
             rem, quasi dolores temporibus alias quae amet iste ut
             reiciendis debitis commodi, impedit ratione.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Aliquam eveniet incidunt perferendis eaque nam ea accusamus
             rem, quasi dolores temporibus alias quae amet iste ut
             reiciendis debitis commodi, impedit ratione.
            `
        },
    ]

    return (
        <div className='about-page'>
            {data.map((content, index) => AboutCard(content, index))}
        </div>
    )
}

export default About;