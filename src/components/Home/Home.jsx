import MetaData from "../Layouts/MetaData"
import AboutSection from "./AboutSection/AboutSection"
import Amenities from "./Amenities/Amenities"
import BannerSlider from "./BannerSlider/BannerSlider"
// import Clubhouse from "./Clubhouse/Clubhouse"
import FloorPlan from "./FloorPlan/FloorPlan"
import Gallery from "./Gallery/Gallery"
import Location from "./Location/Location"
import MasterPlan from "./MasterPlan/MasterPlan"
import PriceList from "./PriceList/PriceList"
import ClubZaira from "./ClubZaira/ClubZaira"

const Home = () => {
    return (
        <>
            <MetaData 
                title={"Luxury 3 & 4bhk flats in Zirakpur - Vamana Arvindam Zirakpur"} 
                description={"Discover luxury 3 & 4 BHK flats in Zirakpur. Explore new residential projects offering modern amenities, prime locations, and elegant living spaces for your dream home."} 
                keywords={"Vamana Group, Vamana Arvindam, 3 BHK flats Zirakpur, 3+1 BHK flats Zirakpur, 4+1 BHK flats Zirakpur, Flats near Patiala Road Zirakpur, Luxury apartments Zirakpur, Luxury Flats in Zirakpur, Premium Property in Zirakpur, New Residential Project in Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
            />

            <BannerSlider />
            <AboutSection />
            <Amenities />
            <FloorPlan />
            <MasterPlan />
            <ClubZaira/>
            <Location />
            {/* <Clubhouse /> */}
            <Gallery />
            <PriceList />
        </>
    )
}

export default Home