import MetaData from "../Layouts/MetaData"
import BannerSlider from "./Slider/BannerSlider"

const Home = () => {
    return (
        <>
            <MetaData 
                title={"Luxurious Ready to Move Homes Zirakpur | Green Lotus Saksham"} 
                description={"Green Lotus Saksham: A green residential project that blends luxury and eco-sustainability in Zirakpur. Live in harmony with nature. Reserve your space today!"} 
            />

            <BannerSlider />
        </>
    )
}

export default Home