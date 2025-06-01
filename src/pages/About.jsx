import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
import Main from '../Components/about/Main'
import Values from '../Components/about/Values'
import Timeline from '../Components/about/Timeline'
import Stats from '../Components/about/Stats'
const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Main />
            <Values />
            <Timeline />
            <Stats />
            <Footer />
        </div>
    )
}

export default About