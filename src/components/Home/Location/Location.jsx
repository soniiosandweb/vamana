import { LazyLoadImage } from 'react-lazy-load-image-component';
import locationimg from '../../../assests/images/location-img.jpg';
import locationOverlay from '../../../assests/images/location-overlay.png';

const Location = () => {

    const locations = [
        {
            title: "Public Transportation",
            values: [
                "Bus Stand -5 mins", 
                "International Airport – 7 mins",
                "Railway Station – 12 mins",
            ]
        },
        {
            title: "Malls & Multiplexes",
            values: [
                "Paras Downtown-5 mins", 
                "Cosmo Plaza-4 mins Inox",
                "Metro/Best Price – 4 mins",
            ]
        },
        {
            title: "Sports & Golf Course",
            values: [
                "Panchkula Golf Course-10 mins", 
                "Chandi Mandir Golf Course-15 mins",
                "Chandigarh Golf Course- 18 mins",
            ]
        },
        {
            title: "IT/Industrial Area",
            values: [
                "Panchkula Industrial Area – 8 mins", 
                "IT Park, Panchkula-10 mins",
                "Chandigarh IT Park – 15 mins",
            ]
        },
        {
            title: "Hospitals",
            values: [
                "GMCH, Sector 32, Chandigarh-15 mins", 
                "Alchemist, Panchkula-10 mins",
                "Fortis Mohali – 15 mins",
                "Mehar-2 mins",
            ]
        },
        {
            title: "Education",
            values: [
                "ST Xavier School – 2 mins", 
                "Mount Carmel School – 1 mins",
                "Manav Mangal Smart School-4 mins",
                "Upcoming Amity University- 8 mins",
                "Chitkara University-20 mins",
            ]
        }
    ]

    return(
        <section className="home-location-section bg-primary-green text-white py-8 md:py-16 px-2.5 relative" id="location">
            <div className='max-w-6xl m-auto z-10 relative'>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/5 flex flex-col gap-5 px-7 md:px-12 lg:px-14">
                        <p className='text-gray-300 font-semibold text-lg'>Zirakpur Patiala Highway</p>
                        <h2 className="text-2xl sm:text-4xl font-semibold text-left">Excellent Location & Connectivity!</h2>
                        <div className='flex flex-row flex-wrap mt-10 gap-y-10'>
                           {locations.map((index, i) => (
                                <div className='flex flex-col pr-10 w-full lg:w-1/2 gap-2' key={i}>
                                    <h3 className='text-lg font-semibold mb-3'>{index.title}</h3>
                                    {index.values.map((subitem,i) => (
                                        <p className='text-sm text-gray-300' key={i}>{subitem}</p>
                                    ))}
                                </div>
                            ))} 
                        </div>
                        
                    </div>
                    <div className="w-full md:w-2/5 pt-12 md:pt-0">
                        <LazyLoadImage
                            src={locationimg}
                            alt='Location'
                            className='h-full object-cover object-left w-full'
                        />
                    </div>
                </div>
            </div>
            <LazyLoadImage
                src={locationOverlay}
                alt='Location Overlay'
                className='h-full object-cover object-center w-full absolute top-0 left-0 opacity-15'
            />
        </section>
    )
}

export default Location