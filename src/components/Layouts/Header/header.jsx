import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../../assests/images/GL-main-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-primary-green text-white mb-0">
          <Container fluid>
            <Navbar.Brand href="#" className='w-48'>
              <img src={logo} alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle className="text-white border-0 shadow-none" aria-controls={`offcanvasNavbar-expand-lg`}>
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-evenly flex-grow-1 pe-3 text-base font-semibold">
                  <Nav.Link href="#about" className='lg:text-white hover:underline'>About</Nav.Link>
                  <Nav.Link href="#amenities" className='lg:text-white hover:underline'>Amenities</Nav.Link>
                  <Nav.Link href="#clubhouse" className='lg:text-white hover:underline'>Clubhouse</Nav.Link>
                  <Nav.Link href="#sampleflat" className='lg:text-white hover:underline'>Sample Flat</Nav.Link>
                  <Nav.Link href="#location" className='lg:text-white hover:underline'>Excellent Location</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
};

export default Header;
