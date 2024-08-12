import { Link } from "react-router-dom";

const AboutSection = () => {
    return(
        <section className="home-about-section py-16 px-2.5" id="about">
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-col text-left gap-5">
                    <h2 className="text-2xl sm:text-4xl font-semibold text-left">About Us</h2>
                    <p className="text-sm">Vamana group is planning to develop a residential apartment complex at patiala road, Zirakpur. Proposed name of this project is Vamana Zirakpur. It will be located in Zirakpur and as we know Zirakpur is located on the outer periphery of Mohali mainland & Chandigarh.</p>
                    <p className="text-sm">Vamana group is planning to build one of the most luxurious projects that outclasses other projects of its kind by offering best-in-class amenities. It is under approval stage and under planning to build high rise 3 & 3+1 BHK Luxury Apartments. Vamana group owned 2.5 land parcels on patiala road, Zirakpur.</p>
                    <Link to="#" className="w-max bg-primary-yellow text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8">Compliance Report</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutSection