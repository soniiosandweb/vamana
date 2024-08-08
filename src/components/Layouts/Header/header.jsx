import logo from '../../../assests/images/GL-main-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

const Header = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
      name: "Clubhouse",
      redirect: "/#clubhouse",
      id: "clubhouse",
    },
    {
      name: "Sample Flat",
      redirect: "/#sampleflat",
      id: "sampleflat",
    },
    {
      name: "Excellent Location",
      redirect: "/#location",
      id: "location",
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 270 }} role="presentation" onClick={toggleDrawer(false)}>
      
      <div className='flex flex-col p-3'>
        <div className='flex justify-end'>
          <FontAwesomeIcon icon={faClose} className='text-3xl cursor-pointer' onClick={toggleDrawer(false)} />
        </div>
        {menuLinks.map((item,i) => (
          <Link smooth="true" to={item.redirect} key={i} className="text-sm hover:text-primary-brown header-nav-link py-2.5 px-5" >{item.name}</Link>
        ))}
      </div>
    </Box>
  );

  return (
    <>
        <header className="bg-primary-green text-white mb-0">
          <div className="flex items-center">
            <div className="w-1/2 lg:w-2/12 p-2.5">
              <NavLink to="/" className="block w-auto" reloadDocument={true}>
                <LazyLoadImage
                  src={logo}
                  alt="The Ananta Aspire"
                  className='header-logo w-40 lg:w-60'
                />
              </NavLink>
            </div>
            
            <div className="w-1/2 lg:w-10/12 p-2.5 text-right lg:text-center">
              <nav className="hidden lg:flex gap-5 items-center justify-evenly flex-wrap">
                {menuLinks.map((item,i) => (
                  <Link smooth="true" to={item.redirect} key={i} className="text-md font-semibold hover:text-primary-brown header-nav-link" >{item.name}</Link>
                ))}
              </nav>
              <FontAwesomeIcon icon={faBars} className='text-white text-xl flex lg:hidden cursor-pointer p-2.5 ml-auto' onClick={toggleDrawer(true)} />
              <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
                {DrawerList}
              </Drawer>
            </div>
          </div>
        </header>
    </>
  );
};

export default Header;
