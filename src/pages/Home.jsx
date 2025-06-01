import Hero from '../Components/home/Hero'
import Testimonials from '../Components/home/Testimonials'
import Joining from '../Components/home/Joining'
import NewsletterSignup from '../Components/home/NewsletterSignup'
import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-white">
                <Header/>
                <Hero />
                <Testimonials/>
                <Joining/>
                <NewsletterSignup/>
                <Footer/>
            </div>


        </>
    )
}

export default Home