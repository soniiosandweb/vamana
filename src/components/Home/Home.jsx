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

const Home = () => {
    return (
        <>
            <MetaData 
                title={"Vamana Residences. 3BHK Luxury Apartments in Zirakpur"} 
                description={"Vamana Residences. 3, 3+1 & 4+1 BHK Luxury Apartments on Patiala Highway in Zirakpur"} 
            />

            <BannerSlider />
            <AboutSection />
            <Amenities />
            <FloorPlan />
            <MasterPlan />
            <Location />
            {/* <Clubhouse /> */}
            <Gallery />
            <PriceList />
        </>
    )
}

export default Home