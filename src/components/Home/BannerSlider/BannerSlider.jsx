import './BannerSlider.css';
import banner1 from '../../../assests/images/banner/banner-1.webp';
import banner2 from '../../../assests/images/banner/banner-2.webp';
import banner3 from '../../../assests/images/banner/banner-3.jpg';
import banner4 from '../../../assests/images/banner/banner-4.webp';
import banner5 from '../../../assests/images/banner/banner-5.webp';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const BannerSlider = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slides = [
        {
            title: "Elevate Your Lifestyle: Discover Vamana’s Exclusive Refuge",
            subtitle: (
                <>
                    Discover Vamana, where your home is a serene escape from urban life. Imagine a gated, green enclave with pathways crafted for peace and relaxation. Our <strong>luxurious 3BHK flats in Zirakpur and 4BHK apartments in Zirakpur</strong> offer a distinctive synthesis of quietude and modern luxury.
                </>
            ),

            image: banner1,
            alt: "Vamana Group - Modern 3BHK & 4BHK Flats in Zirakpur",

        },
        {
            title: "Live Grand, Live Vamana Unwind in a Gated Oasis",
            subtitle: (
                <>
                    Vamana isn't just an address; it's a serene sanctuary away from the bustle of city life. Imagine stepping into a secure, gated community where lush greenery and thoughtfully designed walkways create a tranquil atmosphere. Vamana promises a lifestyle where peace and comfort seamlessly blend with modern luxury with our <strong>3 BHK flats in Zirakpur and 4 BHK flats in Zirakpur</strong>.
                </>
            ),
            image: banner2,
            alt: "Vamana Residences - Modern apartment buildings in Zirakpur",
        },
        {
            title: "Luxurious Hideaway: Unwind in Vamana’s Secured Haven",
            subtitle: (
                <>
                    Vamana offers an exceptional lifestyle, transforming your residence into a peaceful retreat from city noise. Picture a secure, green community with artfully designed walkways enhancing your relaxation. Our <strong>luxury flats Zirakpur</strong> uniquely combine tranquility with upscale living
                </>
            ),
            image: banner3,
            alt: "Vamana Residences - Luxurious 3 BHK Apartment Interior",
        },
        {
            title: "Our spacious 3, 3+1 and 4+1 BHK flats in Zirakpur are meticulously crafted to provide you with the ultimate living experience.",
            subtitle: (
                <>
                    Discover Vamana, where your home is a serene escape from urban life. Imagine a gated, green enclave with pathways crafted for peace and relaxation. Our <strong>luxurious 3BHK flats in Zirakpur and 4BHK apartments in Zirakpur</strong> offer a distinctive synthesis of quietude and modern luxury.
                </>
            ),

            image: banner4,
            alt: "Vamana Residence Apartment Exterior",

        },
        {
            title: "Vamana - Where Every Detail Exudes Excellence, Luxurious 3/3+1/4 BHK Apartments",
            subtitle: (
                <>
                    Discover Vamana, where your home is a serene escape from urban life. Imagine a gated, green enclave with pathways crafted for peace and relaxation. Our <strong>luxurious 3BHK flats in Zirakpur and 4BHK apartments in Zirakpur</strong> offer a distinctive synthesis of quietude and modern luxury.
                </>
            ),

            image: banner5,
            alt: "Vamana Residence Apartment Exterior",

        }
    ];

    return (
        <section className="overflow-hidden">
            <Slider {...settings}>
                {slides.map((el, i) => (
                    <div className='w-full content-center h-screen relative overflow-hidden' key={i}>
                        <div className='max-w-6xl mr-auto ml-0 flex relative banner-slider text-white px-2.5 py-3 z-10'>
                            <div className="flex flex-col items-center">
                                <div md={12} xl={10} className='w-full md:w-4/5 m-auto'>
                                    <div className='flex   h-full flex-col gap-4 text-left'>
                                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold'>{el.title}</h1>
                                        {/* <p className='text-md sm:text-xl'>{el.subtitle}</p> */}
                                        <div className='w-72 h-px bg-white mt-16'></div>
                                        <ul className='flex flex-col md:flex-row gap-4'>
                                            <li className='flex gap-2 items-center text-sm font-semibold'><FontAwesomeIcon icon={faHome} /> 3 BHK Apartments</li>
                                            <li className='flex gap-2 items-center text-sm font-semibold'><FontAwesomeIcon icon={faHome} /> 3+1 BHK Apartments</li>
                                            <li className='flex gap-2 items-center text-sm font-semibold'><FontAwesomeIcon icon={faHome} /> 4+1 BHK Apartments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LazyLoadImage
                            src={el.image}
                            alt={el.alt}
                            className="w-full object-cover object-center absolute top-0 h-full banner-slider-bg"
                            style={{ zIndex: "-1" }}
                        />
                        <div className='w-full absolute top-0 h-full' style={{ backgroundColor: "#00000080" }}></div>
                        <p className='text-xs font-semibold p-1 absolute mx-auto bottom-4 right-3 text-white w-max'>*Image shown is for illustration purposes only</p>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default BannerSlider