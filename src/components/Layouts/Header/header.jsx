import './Header.css';
import logo from '../../../assests/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Dialog } from '@mui/material';
import EnquireForm from '../EnquireForm/EnquireForm';

const Header = () => {

  const location = useLocation();


  // const pathname = location.pathname;
  // const locationValue = pathname.split("/");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEnquireClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16677697257/DBiSCPzj9MsZEOntxZA-',
        'value': 1.0,
        'currency': 'INR'
      });
    } else {
      console.error('gtag is not defined');
    }
    handleOpen()
  };


  const menuLinks = [
    {
      name: "About",
      redirect: "/#about",
      id: "about",
    },
    {
      name: "Amenities",
      redirect: "/#amenities",
      id: "amenities",
    },
    {
      name: "Floor Plan",
      redirect: "/#floorplan",
      id: "floorplan",
    },
    {
      name: "Master Plan",
      redirect: "/#masterplan",
      id: "masterplan",
    },
    {
      name: "Location",
      redirect: "/#location",
      id: "location",
    },
    {
      name: "Gallery",
      redirect: "/#gallery",
      id: "gallery",
    },
    {
      name: "Price List",
      redirect: "/#pricelist",
      id: "pricelist",
    },
  ];


  useEffect(() => {

    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      console.log(location.hash.slice(1))
      if (element) {
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth'});
        // window.scrollTo({ top: element.offsetTop, behavior: 'smooth'});
      }
    }
  }, [location]);

  return (
    <>
        {/* Header */}
        <header className={`bg-primary-bg top-0 z-20 w-full sticky`}>
        <div className="px-0 sm:px-5 py-2.5 flex items-center">
          <div className="w-1/4 lg:w-1/6 xl:w-1/4 px-2.5">
            <NavLink to="/" className="block w-auto sm:w-max" reloadDocument={true}>
              <LazyLoadImage
                src={logo}
                alt="Vamana Residences Logo"
                className='header-logo w-40'
              />
            </NavLink>
          </div>
          <div className="hidden lg:block w-3/6 xl:w-2/4 px-2.5">
            <nav className="flex gap-5 items-center justify-center flex-wrap">
              {menuLinks.map((item,i) => (
                <Link smooth="true" to={item.redirect} key={i} className="text-sm font-medium hover:text-primary-yellow header-nav-link" >{item.name}</Link>
              ))}
            </nav>
          </div>
          <div className="w-3/4 lg:w-2/6 xl:w-1/4 flex justify-end items-center gap-2 sm:gap-5 px-2.5 flex-wrap">
            <NavLink to='tel:+918609000900' className="text-sm sm:text-md font-semibold header-nav-link blink"><FontAwesomeIcon icon={faPhone} className="text-primary-yellow pr-1" /> +91 8609000900</NavLink>

            <button tabIndex='-1' className="text-xs font-semibold capitalize cursor-pointer bg-primary-yellow p-2 sm:p-2.5 text-white" onClick={handleEnquireClick} id="enquire_now">Enquire Now</button>
          </div>
        </div>
      </header>

      <NavLink to='https://api.whatsapp.com/send/?phone=8609000900&text=I+would+like+to+know+more+about+Vamana+Arvindam&type=phone_number&app_absent=0' target="_blank" className=" fixed z-20 bg-primary-lightGreen text-white text-md font-medium px-5 py-2 flex gap-2.5 rounded-full items-center overflow-hidden" style={{left: "20px", bottom: "24px"}}>
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl pulso-animation" />
          How can I help you? 
      </NavLink>

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
  );
};

export default Header;
