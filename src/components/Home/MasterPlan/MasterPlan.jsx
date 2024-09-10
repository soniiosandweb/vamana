import Lightbox from 'yet-another-react-lightbox';
import siteplan from '../../../assests/images/siteplan.jpg';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import { useState } from 'react';

const MasterPlan = () => {
    const [openMaster, setOpenMaster] = useState(false);
    
    return(
        <section className="home-masterplan-section py-16 px-2.5" id="masterplan">
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-col text-left gap-5">
                    <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Master Plans</h2>

                    <div className="flex flex-col md:flex-row gap-8 ">

                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            <img src={siteplan} alt='Vamana Residences - Master Plan' className='w-full h-full object-cover border-4 border-primary-yellow rounded-3xl cursor-pointer' onClick={() => setOpenMaster(true)}/>
                            <Lightbox
                                open={openMaster}
                                close={() => setOpenMaster(false)}
                                slides={[
                                    { src: siteplan }
                                ]}
                                plugins={[Fullscreen, Zoom]}
                                carousel={{ finite: 1 }}
                                render={{
                                    buttonPrev: undefined,
                                    buttonNext: undefined,
                                }}
                                className="single-lightbox"
                            />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            <p className="text-sm">Nestled amidst 7.77 acres of lush greenery on the vibrant NH-7, Patiala Highway, Vamana Residences offers a unique blend of modern living and natural serenity with its <b>luxurious 3bhk flats in zirakpur and 4bhk flats in zirakpur</b>. With 350 thoughtfully designed units, this meticulously planned community provides an idyllic escape from the city's hustle and bustle.</p>
                            <p className="text-sm">Experience the perfect harmony of nature and luxury as you step into a world of well-defined residential clusters. Enjoy a plethora of world-class amenities, from state-of-the-art fitness centers to tranquil recreational spaces. Vamana's prime location, coupled with dedicated parking and top-tier security, ensures a convenient and secure lifestyle for its residents.</p>
                            <p className="text-sm">Indulge in the epitome of comfortable living at <b>Vamana Residences</b>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MasterPlan