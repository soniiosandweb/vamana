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
                            <img src={siteplan} alt='Master Plan' className='w-full h-full object-cover border-4 border-primary-yellow rounded-3xl cursor-pointer' onClick={() => setOpenMaster(true)}/>
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
                            <p className="text-sm">Vamana Residences, sprawling across 7.77 acres, offers a carefully curated living experience with 350 units, strategically positioned on NH-7, Patiala Highway. The site plan unfolds an inviting landscape, featuring well-defined residential clusters surrounded by lush greenery. This creates an immersive environment that seamlessly blends modern living with nature's tranquility. The development's commitment to accessibility is underscored by its "Bang on Patiala Highway" approach, providing not just a home but a lifestyle marked by connectivity. The thoughtful integration of amenities zones, from fitness centers to recreational spaces, enhances community living, while dedicated parking areas and robust security measures ensure convenience and safety.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MasterPlan