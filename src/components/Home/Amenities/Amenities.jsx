import { faBaseball, faBicycle, faBox, faCakeCandles, faCampground, faChargingStation, faChildReaching, faDumbbell, faLightbulb, faSquareParking, faUserCheck, faWaterLadder } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Amenities = () => {

    const amenities = [
        {
            title: "Swimming Pool",
            icon: faWaterLadder,
        },
        {
            title: "Smart Visitor Monitoring System",
            icon: faUserCheck,
        },
        {
            title: "Smart Public area Lighting",
            icon: faLightbulb,
        },
        {
            title: "Hassle Free Parking",
            icon: faSquareParking,
        },
        {
            title: "Open Spaces",
            icon: faBicycle,
        },
        {
            title: "Multi-purpose Hall",
            icon: faCakeCandles,
        },
        {
            title: "Kids space",
            icon: faChildReaching,
        },
        {
            title: "Gymnasium",
            icon: faDumbbell,
        },
        {
            title: "Gazebo Seating",
            icon: faCampground,
        },
        {
            title: "Electric Vehicle Charging Station",
            icon: faChargingStation,
        },
        {
            title: "Rooftop tennis Court",
            icon: faBox,
        },
        {
            title: "Sports & Community Facilities",
            icon: faBaseball,
        },
    ]

    return(
        <section className="home-amenities-section py-5 md:py-16 px-2.5" id="amenities">
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-row flex-wrap gap-0 md:gap-y-12">
                    {amenities.map((item, i) => (
                        <div className="w-full md:w-3/12 p-6 flex flex-col gap-4 justify-center items-center" key={i}>
                            <FontAwesomeIcon icon={item.icon} className="text-5xl text-primary-btnGreen"/>
                            <h3 className="text-xl lg:text-25 font-semibold text-center">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Amenities