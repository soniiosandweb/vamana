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
                        <p className="text-sm">Vamana Group is planning to develop a residential apartment complex at patiala road, Zirakpur. Proposed name of this project is Vamana Zirakpur. It will be located in Zirakpur and as we know Zirakpur is located on the outer periphery of Mohali mainland & Chandigarh.</p>
                        <p className="text-sm">Vamana Group is planning to build one of the most luxurious projects that outclasses other projects of its kind by offering best-in-class amenities. It is under approval stage and under planning to build high rise 3 & 3+1 BHK Luxury Apartments. Vamana Group owned 2.5 land parcels on patiala road, Zirakpur.</p>
                        <button tabIndex='-1' className="w-max bg-primary-yellow text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8" onClick={handleOpen}>Compliance Report</button>
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
                <EnquireForm title="Get In Touch" setOpen={setOpen} />
                </div>
            </Dialog>
        </>
    )
}

export default AboutSection