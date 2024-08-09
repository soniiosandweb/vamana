import { Link } from "react-router-dom";
// import pdf from '../../../assests/pdf/SMC-Saksham.pdf';

const AboutSection = () => {
    return(
        <section className="home-about-section py-16 px-2.5" id="about">
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-col text-left gap-5">
                    <h2 className="text-2xl sm:text-4xl font-semibold text-left">About Us</h2>
                    <p className="text-sm">Vamana Zirakpur is upcoming project of Zirakpur and one of the most luxury Project that outclasses other projects of its kind by offering best-in-class amenities. Vamana Zirakpur will be high rise 3 & 3+1 BHK and 4+1 BHK</p>
                    <Link to="#" className="w-max bg-primary-yellow text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8">Compliance Report</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutSection