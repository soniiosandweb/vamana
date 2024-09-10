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
            <section className="home-about-section py-16 px-2.5" id="about">
                <div className='max-w-6xl m-auto'>
                    <div className="flex flex-col text-left gap-5">
                        <h2 className="text-2xl sm:text-4xl font-semibold text-left">About Us</h2>
                        <p className="text-sm">Experience a lifestyle of unparalleled luxury and tranquility at <b>Vamana Residences flats in Zirakpur</b>, a gated oasis nestled amidst lush greenery. Our thoughtfully designed apartments offer a perfect blend of modern comfort and serene living. Imagine waking up to breathtaking views and enjoying world-class amenities right at your doorstep.</p>
                        <p className="text-sm">At Vamana, we believe that home is more than just a place to live; it's a sanctuary where you can truly unwind and flourish. Our spacious <b>3 BHK flats in Zirakpur and 4 BHK flats in Zirakpur</b> are meticulously crafted to provide you with the ultimate living experience.</p>
                        <button tabIndex='-1' className="w-max bg-primary-yellow text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8" onClick={handleOpen}>Request For Brochure</button>
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