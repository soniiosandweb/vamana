import { Link } from "react-router-dom";
import pdf from '../../../assests/pdf/SMC-Saksham.pdf';

const AboutSection = () => {
    return(
        <section className="home-about-section py-16 px-2.5" id="about">
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-col text-left gap-5">
                    <h2 className="text-2xl sm:text-4xl font-semibold text-left">About Us</h2>
                    <p className="text-sm">Green Lotus Saksham creates a perfect blend of luxury and our responsibility towards the environment. Nestled amidst greenery, this green residential project provides an entirely different living experience that promotes eco-sustainability. It includes, 3BHK, 3+1BHK, 4BHK and 5BHK Apartments and penthouses in Zirakpur that offers plush and elegant living.
                    <br/>Eco-friendly homes at Saksham contributes to making the planet greener and livable for the present and the future generations. It helps you live a life in tune with the 'green needs' of the modern world. This is a one-of-kind green residential project with a bounty of unique amenities and features like:</p>
                    <Link to={pdf} target="_blank" className="w-max bg-primary-btnGreen text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8">Compliance Report</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutSection