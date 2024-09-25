
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import { faFacebookSquare, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <section className="bg-primary-bg py-4 text-sm pt-16">
            {/* <div className='max-w-6xl m-auto px-2.5'>
                
                <div className="flex flex-col items-center text-center gap-1.5 px-2.5 pt-6 pb-2.5">
                   
                    <p className='text-md hidden'>Channel Partner RERA Number : Coming Soon</p>
                    <p className='text-md text-primary-yellow font-semibold mt-5 '>Project RERA Number : PBRERA-SAS79-PR1018</p>
                    
                   
                   
                    <p className='mt-1.5'><NavLink to='/terms-conditions' target='_blank' className='text-primary-yellow font-semibold'>Terms & Conditions</NavLink> and <NavLink to='/privacy-policy' target='_blank' className='text-primary-yellow font-semibold'>Privacy Policy</NavLink></p>
                    <p className='mt-1.5 text-xs'>Crafted By: <NavLink to='https://iosandweb.net/' target='_blank' className='hover:text-primary-yellow'>IosAndWeb Technologies</NavLink></p>
                </div>
            </div> */}


            
                <div className="row grid grid-cols-3">
                    <div className="">
                        <div className="footer-col">
                            {/* <Link to="/"><img src={logofooter} alt="IAW-logo" className="footer-logo" /></Link> */}
                            <p className='text-lg font-semibold mt-5 text-primary-yellow'>Disclaimer:</p>
                            <p><b>1.</b> The images shown are for illustration purposes only and may not be an exact representation of the product</p>
                    <p className='mt-1.5'><b>2.</b> Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us.</p>
                    <p>All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws.</p>
                    <p>For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.</p>
                    <p className="mt-1.5 text-md"><b>3</b> <strong>We are the Authorized Channel Partner of <b className="font-semibold">'Vamana Group'</b>. <br /> This website is not the official website of developer & property, it belongs to authorized channel partner and it is for the information purpose only. <br />All rights for logo & images are reserved to developer.</strong></p>

                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-col-head"><b>Useful Links</b></h5>
                        <ul className="footer-col-list">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/pricelist">Price List</Link></li>
                            <li><Link to="/location">Location</Link></li>
                            <li><Link to="/masterplan">Master Plan</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-col-head"><b>Social Links</b></h5>
                        <div className="footer-social-col ">
                            <ul className="flex flex-row gap-4">
                                <li className='social-icn btn btn-2 hover-slide-right'><a href="https://facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} size="lg" /></a></li>
                                <li className='social-icn  btn btn-2 hover-slide-right'><a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
                                <li className='social-icn  btn btn-2 hover-slide-right'><a href="https://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" /></a></li>
                                <li className='social-icn  btn btn-2 hover-slide-right'><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a></li>
                                <li className='social-icn  btn btn-2 hover-slide-right'><a href="https://whatsapp.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="align-items-center row">
                    <div className="Copyright-col col-md-6">
                        <p className="copyright-text">

                        </p>
                    </div>


                </div> */}
           
        </section>
    )
}

export default Footer