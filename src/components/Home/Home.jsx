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
                title={"Vamana Residences: Luxurious 3, 3+1 & 4+1 BHK Flats in Zirakpur"} 
                description={"Upgrade your lifestyle at Vamana Residences. Explore spacious 3 BHK, 3+1 BHK & 4+1 BHK flats near Patiala Road, Zirakpur. Modern amenities, prime location & luxurious living await."} 
                keywords={"Vamana Residences, 3 BHK flats Zirakpur, 3+1 BHK flats Zirakpur, 4+1 BHK flats Zirakpur, Flats near Patiala Road Zirakpur, Luxury apartments Zirakpur, Flats in Zirakpur, Property in Zirakpur, Real Estate Zirakpur, Spacious apartments Zirakpur"}
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