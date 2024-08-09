import { faBox, faBuilding, faBus, faCamera, faChildReaching, faDumbbell, faDungeon, faLightbulb, faRoad, faStreetView, faTreeCity, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Amenities = () => {

    const amenities = [
        {
            title: "Gated & Walled Community",
            icon: faUsers,
        },
        {
            title: "Project is on Wide Road",
            icon: faRoad,
        },
        {
            title: "Power Backup",
            icon: faLightbulb,
        },
        {
            title: "Commercial Complex In Vicinity",
            icon: faBuilding,
        },
        {
            title: "Bus Shelter",
            icon: faBus,
        },
        {
            title: "Lush Green Park",
            icon: faTreeCity,
        },
        {
            title: "Grand Frontage 315 Ft.",
            icon: faBox,
        },
        {
            title: "Open Indoor Gym",
            icon: faDumbbell,
        },
        {
            title: "Designer Street Lights",
            icon: faStreetView,
        },
        {
            title: "Badminton Court",
            icon: faChildReaching,
        },
        {
            title: "Two Side Grand Entrance",
            icon: faDungeon,
        },
        {
            title: "24x7 CCTV Surveillance",
            icon: faCamera,
        },
    ]

    return(
        <section className="home-amenities-section py-5 md:py-16 px-2.5" id="amenities">
            <div className='max-w-6xl m-auto'>
                <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Amenities</h2>
                <div className="flex flex-row flex-wrap gap-0 md:gap-y-12">
                    {amenities.map((item, i) => (
                        <div className="w-full md:w-3/12 p-6 flex flex-col gap-4 justify-center items-center" key={i}>
                            <FontAwesomeIcon icon={item.icon} className="text-5xl text-primary-yellow"/>
                            <h3 className="text-xl lg:text-25 font-semibold text-center capitalize">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Amenities