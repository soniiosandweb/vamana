import './Gallery.css';
import Lightbox from "yet-another-react-lightbox";
import image1 from '../../../assests/images/gallery/gallery-1.webp';
import image2 from '../../../assests/images/gallery/gallery-2.webp';
import image3 from '../../../assests/images/gallery/gallery-3.webp';
import image4 from '../../../assests/images/gallery/gallery-4.webp';
import image5 from '../../../assests/images/gallery/gallery-5.webp';
import image6 from '../../../assests/images/gallery/gallery-6.webp';
import image7 from '../../../assests/images/gallery/gallery-7.webp';
import image8 from '../../../assests/images/gallery/gallery-8.webp';
import image9 from '../../../assests/images/gallery/gallery-9.webp';
import { Counter, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useState } from "react";

const Gallery = () => {

    const [index, setIndex] = useState(-1);

    const images = [
        {
            src: image1,
            title: "Kids playing in the garden infront of the Vamana apartments",
        },
        {
            src: image2,
            title: "Vamana apartments exterior",
        },
        {
            src: image3,
            title: "Bird's eye view of Vamana residences exterior",
        },
        {
            src: image4,
            title: "An overview of Vamana Residences",
        },
        {
            src: image5,
            title: "Entry gate to Vamana Residences",
        },
        {
            src: image6,
            title: "Vamana apartments bottom to top view",
        },
        {
            src: image7,
            title: "Garden and swimming pool amenities close to the Vamana Apartments",
        },
        {
            src: image8,
            title: "Overview of the Vamana Residences",
        },
        {
            src: image9,
            title: "Car entering into the lavish Vamana Residency",
        },
    ]

    return(
        <section className="home-gallery-section py-8 md:py-16 px-2.5" id="gallery">
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 p-2.5">
                        {images.map((item, i) => (
                            <div className='relative overflow-hidden rounded-md gallery-image h-full' key={i}>
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className='rounded-md hover:scale-110 w-full h-full object-cover transition ease-in-out duration-300 cursor-pointer'
                                    onClick={() => setIndex(i)}
                                />
                                <p className='text-xs font-semibold p-1 absolute bottom-2.5 right-2.5 left-auto text-white w-auto'>*Image shown is for illustration purposes only</p>
                            </div>
                        ))}
                        <Lightbox
                            index={index}
                            slides={images}
                            open={index >= 0}
                            styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                            controller={{ closeOnBackdropClick: true }}
                            close={() => setIndex(-1)}
                            plugins={[Fullscreen, Zoom, Counter]}
                            counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery