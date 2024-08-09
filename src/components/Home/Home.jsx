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
                title={"Luxurious Ready to Move Homes Zirakpur | Green Lotus Saksham"} 
                description={"Green Lotus Saksham: A green residential project that blends luxury and eco-sustainability in Zirakpur. Live in harmony with nature. Reserve your space today!"} 
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