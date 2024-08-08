import './BannerSlider.css';
import banner1 from '../../../assests/images/banner/banner1.jpeg';
import banner2 from '../../../assests/images/banner/banner2.jpeg';
import banner3 from '../../../assests/images/banner/banner3.jpeg';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const BannerSlider = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slides = [
        {
          title: "Get Ready for Luxurious Living!",
          subtitle : "Vamana Zirakpur is upcoming project of Zirakpur and one of the most luxury Project that outclasses other projects of its kind by offering best-in-class amenities. Vamana Zirakpur will be high rise 3 & 3+1 BHK.",
          image : banner1,
        },
        {
            title: "Get Ready for Luxurious Living!",
          subtitle : "Vamana Zirakpur is upcoming project of Zirakpur and one of the most luxury Project that outclasses other projects of its kind by offering best-in-class amenities. Vamana Zirakpur will be high rise 3 & 3+1 BHK.",
          image : banner2,
        },
        {
            title: "Get Ready for Luxurious Living!",
          subtitle : "Vamana Zirakpur is upcoming project of Zirakpur and one of the most luxury Project that outclasses other projects of its kind by offering best-in-class amenities. Vamana Zirakpur will be high rise 3 & 3+1 BHK.",
          image : banner3,
        }
    ];

    return(
        <section className="overflow-hidden">
            <Slider {...settings}>
                {slides.map((el, i) => (
                    <div className='w-full h-full relative overflow-hidden' key={i}>
                        <div className='max-w-6xl m-auto flex relative banner-slider text-white px-2.5 py-3 z-10'>
                            <div className="flex flex-col items-center">
                                <div md={12} xl={10} className='w-full md:w-4/5 m-auto'>
                                    <div className='flex items-center justify-center h-full flex-col gap-4 text-center'>
                                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold'>{el.title}</h1>
                                        <p className='text-md sm:text-xl'>{el.subtitle}</p>
                                        <div className='w-72 h-px bg-white mt-3'></div>
                                        <ul className='flex flex-col md:flex-row gap-4'>
                                            <li className='flex gap-2 items-center text-sm'><FontAwesomeIcon icon={faHome} /> 3 BHK Apartments</li>
                                            <li className='flex gap-2 items-center text-sm'><FontAwesomeIcon icon={faHome} /> 3+1 BHK Apartments</li>
                                            <li className='flex gap-2 items-center text-sm'><FontAwesomeIcon icon={faHome} /> 4+1 BHK Apartments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LazyLoadImage 
                            src={el.image}
                            alt={el.title}
                            className="w-full object-cover object-center absolute top-0 h-full banner-slider-bg"
                            style={{zIndex: "-1"}}
                        />
                        <div className='w-full absolute top-0 h-full' style={{backgroundColor: "#00000080"}}></div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default BannerSlider