import MetaData from "../Layouts/MetaData"
import AboutSection from "./AboutSection/AboutSection"
import Amenities from "./Amenities/Amenities"
import BannerSlider from "./BannerSlider/BannerSlider"
import Clubhouse from "./Clubhouse/Clubhouse"
import Location from "./Location/Location"

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
            <Location />
            <Clubhouse />
        </>
    )
}

export default Home