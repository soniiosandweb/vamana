
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <section className="bg-primary-bg py-4 text-sm">
            <div className='max-w-6xl m-auto px-2.5'>
                
                <div className="flex flex-col items-center text-center gap-1.5 px-2.5 py-2.5">
                    <p className='text-md'><strong>We are the Authorized Channel Partner of 'Vamana Group Zirakpur'. <br /> This website is not the official website of developer & property, it belongs to authorized channel partner and it is for the information purpose only. <br />All rights for logo & images are reserved to developer.</strong></p>
                    <p className='text-md'>Channel Partner RERA Number : Coming Soon</p>
                    <p className='text-md text-primary-yellow font-semibold mt-5'>Project RERA Number : Coming Soon</p>
                    <p className='text-lg font-semibold mt-5 text-primary-yellow'>Disclaimer:</p>
                    <p><b>1.</b> The images shown are for illustration purposes only and may not be an exact representation of the product</p>
                    <p className='mt-1.5'><b>2.</b> Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us.</p>
                    <p>All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws.</p>
                    <p>For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.</p>
                    <p className='mt-1.5'><NavLink to='/terms-conditions' target='_blank' className='text-primary-yellow font-semibold'>Terms & Conditions</NavLink> and <NavLink to='/privacy-policy' target='_blank' className='text-primary-yellow font-semibold'>Privacy Policy</NavLink></p>
                </div>
            </div>
        </section>
    )
}

export default Footer