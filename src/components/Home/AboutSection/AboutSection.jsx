import { Dialog } from '@mui/material';
import EnquireForm from '../../Layouts/EnquireForm/EnquireForm';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>  
            <section className="home-about-section py-16 px-2.5" id="flats">
                <div className='max-w-6xl m-auto'>
                    <div className="flex flex-col text-centre gap-5">
                        <h2 className="text-2xl sm:text-4xl font-semibold text-center">About Us</h2>
                        <p className="text-sm">Experience unparalleled luxury and tranquility at Vamana Residences, a new residential project in Zirakpur—a gated oasis nestled amidst lush greenery and designed for those who seek the perfect balance between modern living and serene surroundings. Our thoughtfully crafted apartments not only provide a comfortable living space but also offer breathtaking views that transform your everyday routine into a peaceful retreat.</p>
                        <p className="text-sm">Imagine waking up each morning to the gentle sounds of nature and enjoying a cup of coffee on your balcony, soaking in the beauty of your surroundings. At Vamana, we prioritize your well-being, offering world-class amenities just steps from your door. From state-of-the-art fitness centers and refreshing swimming pools to beautifully landscaped gardens and dedicated play areas for children, every detail is designed to enhance your lifestyle.</p>
                        <p className="text-sm">We believe that home is more than just a place to live; it’s a sanctuary where you can truly unwind and flourish. Our spacious 3 BHK and 4 BHK flats are meticulously designed to provide a seamless blend of comfort and elegance. With modern finishes and thoughtful layouts, these apartments cater to your every need, whether you’re hosting a gathering or enjoying a quiet evening in.</p>
                        <p className="text-sm">As a premier option for those seeking an apartment for sale in Zirakpur, Vamana Arvindam Group offers an exceptional living experience that you won’t find anywhere else. The strategic location provides easy access to nearby shopping, dining, and entertainment, ensuring that you’re always connected to the vibrant life of the city while returning to the tranquility of your home.</p>
                        <p className="text-sm">At Vamana, your peace of mind is our priority. With 24/7 security and a dedicated management team, you can relax knowing that you’re living in a safe and well-maintained environment. 
                        </p>
                        <p className="text-sm">Embrace a lifestyle where luxury meets tranquility. Discover your dream home in this remarkable new residential project in Zirakpur today, and take the first step towards a life of comfort, convenience, and serenity. </p>
                        <p className="text-sm">Your sanctuary awaits!</p>
                        <button tabIndex='-1' className="w-max  self-center text-primary-yellow border-2 border-primary-yellow  hover:bg-primary-yellow  mt-5 hover:text-white font-bold uppercase text-xs tracking-widest py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8" onClick={handleOpen}>Request For Brochure</button>
                    </div>
                </div>
            </section>

            {/* Popup */}
            <Dialog
                open={open}
                onClose={handleClose}
                className="form_popup"
                aria-hidden="false" 
                sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                    width: "100%",
                    maxWidth: "450px",
                    borderRadius: "30px",
                    backgroundColor: "#f7f7f7",
                    padding: "15px",
                    },
                },
                }}
                aria-modal="true"
            >
                <div className="flex flex-col px-2.5 popup-form">
                <div className="flex justify-end">
                    <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
                </div>
                <EnquireForm title="Request For Brochure" setOpen={setOpen} />
                </div>
            </Dialog>
        </>
    )
}

export default AboutSection