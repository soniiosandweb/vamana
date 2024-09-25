import './Header.css';
import logo from '../../../assests/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Dialog } from '@mui/material';
import EnquireForm from '../EnquireForm/EnquireForm';
// import logowhite from '../../../assests/images/logo-white.png';
import popupImg from '../../../assests/images/popup-img.jpg';

const Header = () => {

  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");
  // const pathname = location.pathname;
  // const locationValue = pathname.split("/");
  const [scrollClass, setScrollClass] = useState('scroll');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  // const [navbarLogo, setNavbarLogo] = useState(logowhite);
  const [showPopupNew, setShowPopupNew] = useState(false);
  const [showsidePopup, setshowsidePopup] = useState(false);
 
  const handleEnquireClick = () => {
    // if (window.gtag) {
    //   window.gtag('event', 'conversion', {
    //     'send_to': 'AW-16677697257/DBiSCPzj9MsZEOntxZA-',
    //     'value': 1.0,
    //     'currency': 'INR'
    //   });
    // } else {
    //   console.error('gtag is not defined');
    // }
    handleOpen()
  };
  const newSidePopUpClose  = () => {
    setshowsidePopup(false)
  }

  const handleNewClose = () => {
    setShowPopupNew(false);
    setshowsidePopup(true);
  }

  const menuLinks = [
    {
      name: "About Us",
      redirect: "/flats",
      id: "flats",
    },
    {
      name: "Amenities",
      redirect: "/amenities",
      id: "amenities",
    },
    {
      name: "Floor Plan",
      redirect: "/floorplan",
      id: "floorplan",
    },
    {
      name: "Master Plan",
      redirect: "/masterplan",
      id: "masterplan",
    },
    {
      name: "Club Zaira",
      redirect: "/clubzaira",
      id: "clubzaira",
    },
    {
      name: "Location",
      redirect: "/location",
      id: "location",
    },
    {
      name: "Gallery",
      redirect: "/gallery",
      id: "gallery",
    },
    {
      name: "Price List",
      redirect: "/pricelist",
      id: "pricelist",
    },
  ];

  useEffect(() => {
    setTimeout(() => setShowPopupNew(true), 5000);
  }, [])

  // handle menu click
  const handleMenuClick = (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;
    const element = document.getElementById(id);
    if (element) {
      console.log(element)
      element.style.scrollMarginTop = '50px';
      element.scrollIntoView({ behavior: 'smooth' });
      // window.scrollTo({ top: element.offsetTop, behavior: 'smooth'});
      
    }
  }

  useEffect(() => {
    const listenScrollEvent = () => {
      if (locationValue[1] === "" ||  menuLinks.some(item => item.id === locationValue[1])) {
        const newScrollClass = window.scrollY > 50 ? '' : 'scroll';
        setScrollClass(newScrollClass);
      } else {
        setScrollClass('scroll');
      }
    };



    window.addEventListener("scroll", listenScrollEvent);
    //return () => window.removeEventListener("scroll", listenScrollEvent);

    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      // console.log(location.hash.slice(1))
      // console.log(element);
      if (element) {
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth' });
        // window.scrollTo({ top: element.offsetTop, behavior: 'smooth'});
      }
    }
    console.log(location.pathname.split("/"))

    if(menuLinks.some(item => item.id === location.pathname.split("/")[1])){
      const path = location.pathname.split("/")[1];
      const element = document.getElementById(path);
    
      if (element) {
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth' });
        // window.scrollTo({ top: element.offsetTop, behavior: 'smooth'});
        
      }
    }

    if('flats' === location.pathname.split("/")[1]){
      const path = 'about';
      const element = document.getElementById(path);
      if (element) {
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth' });
        // window.scrollTo({ top: element.offsetTop, behavior: 'smooth'});
      }
    }
  }, [locationValue, location]);

  return (
    <>
      {/* Header */}
      <header className={`bg-primary-bg top-0 z-20 w-full ${scrollClass} ${locationValue[1] === "" ||  menuLinks.some(item => item.id === locationValue[1]) ? 'sticky home-header' : 'sticky'}`}>
        <div className="px-0 sm:px-5 py-2.5 flex items-center ">
          <div className="w-1/4 lg:w-1/6 xl:w-1/4 px-2.5">
            <NavLink to="/" className="block w-auto sm:w-max" reloadDocument={true}>
              <LazyLoadImage
                src={logo}
                alt="Vamana Arvindam"
                className='header-logo w-40'
              />
            </NavLink>
          </div>
          <div className="hidden lg:block w-3/6 xl:w-2/4 px-2.5">
            <nav className="flex gap-1.5 xl:gap-[14px] items-center justify-center flex-wrap">
              {menuLinks.map((item, i) => (
                <a smooth="true" href={item.redirect} key={i} className="text-xs 1xl:text-sm font-medium hover:text-primary-yellow header-nav-link" data-id={item.id} onClick={(e) => handleMenuClick(e)}>{item.name}</a>
              ))}
            </nav>
          </div>
          <div className="w-4/5 lg:w-2/6 xl:w-1/4 flex justify-end items-center gap-x-1.5 gap-y-2.5 sm:gap-x-4 px-2.5 flex-wrap">
            <div className="rera-contact-wrapper flex flex-col">
              <NavLink to='tel:+918609000900' className="text-xxs sm:text-sm 1xl:text-md flex  items-center font-medium header-nav-link font-semibold blink "><FontAwesomeIcon icon={faPhone} className="text-primary-yellow pr-1" /> +91 8609000900</NavLink>
              
            </div>
            <button tabIndex='-1' className="text-xxs sm:text-xs font-bold capitalize cursor-pointer bg-primary-yellow tracking-widest py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8 text-white" onClick={handleEnquireClick} id="enquire_now">Enquire Now</button>

            <NavLink className="text-xxxs sm:text-xs m-auto w-full text-right font-medium header-nav-link font-semibold text-primary-yellow">PBRERA-SAS79-PR1018</NavLink>
          </div>
          <button className="lg:hidden p-2 text-primary-yellow" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          {mobileMenuOpen && (
            <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white shadow-md z-30">
              <div className="flex justify-end p-4">
                <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
              </div>
              <nav className="flex flex-col items-center mt-4">
                {menuLinks.map((item, i) => (
                  <Link key={i} to={item.redirect} className="text-lg font-medium py-2 px-4 hover:text-primary-yellow" onClick={toggleMobileMenu}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className={`popup-modal-dialog ${showPopupNew ? 'block' : 'hidden'}`}>
        <button className='btn-icon' onClick={handleNewClose}>
          <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" />
        </button>

        <div className='img-popup'>
          <img src={popupImg} alt='PoupImg' className='w-full' />
        </div>
      </div>

      {/* <NavLink to='https://api.whatsapp.com/send/?phone=918609000900&text=I+would+like+to+know+more+about+Vamana+Residences&type=phone_number&app_absent=0' target="_blank" className=" fixed z-20 bg-white text-primary-lightGreen text-md font-medium px-5 py-2 flex gap-2.5 rounded-full border-2 border-primary-lightGreen items-center font-medium font-semibold overflow-hidden" style={{ left: "20px", bottom: "24px" }}>
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl pulso-animation " />
        How can I help you?
      </NavLink> */}

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
          <div className="flex justify-end ">
            <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
          </div>
          <EnquireForm title="Request For Brochure" button="Submit Now" setOpen={setOpen} />
        </div>
      </Dialog>
      {/* Side Popup for form*/}
      <div className={` side-popup-form ${showsidePopup ? 'flex' : 'hidden'} border-4 border-primary-yellow `}>
        <div className="flex justify-end btn-icon">
          <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={newSidePopUpClose} />
        </div>
        <EnquireForm title="Vamana Residences Price List" button="Get New Price List"  />
      </div>
    </>
  );
};

export default Header;
