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
                title={"Vamana Group - 3+1 & 4+1 BHK Luxury Residential Flats in Zirakpur"} 
                description={"Discover Vamana Arvindam Flats in Zirakpur, a new residential project offering premium amenities. Explore spacious 3 BHK, 3+1 BHK & 4+1 BHK flats near Patiala Road, Zirakpur. Modern amenities, prime location & luxurious living await."} 
                keywords={"Vamana Group, Vamana Arvindam, 3 BHK flats Zirakpur, 3+1 BHK flats Zirakpur, 4+1 BHK flats Zirakpur, Flats near Patiala Road Zirakpur, Luxury apartments Zirakpur, Luxury Flats in Zirakpur, Premium Property in Zirakpur, New Residential Project in Zirakpur"}
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