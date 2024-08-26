import { faBaseball, faBasketball, faBicycle, faBox, faBuilding, faBus, faCamera, faChair, faChampagneGlasses, faChild, faChildReaching, faDumbbell, faDungeon, faKaaba, faLightbulb, faPerson, faPersonPraying, faPersonRunning, faRoad, faShield, faSquare, faStreetView, faSwimmingPool, faTableTennis, faToriiGate, faTree, faTreeCity, faUsers, faWalking, faWeightHanging } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Amenities = () => {

    const amenities = [
        {
            title: "Entrance Plaza With Trellis",
            icon: faDungeon,
        },
        {
            title: "Pathway (1.2 M Wide)",
            icon: faRoad,
        },
        {
            title: "Designer Street Lights",
            icon: faStreetView,
        },
        {
            title: "Gate Complex & Security Cabin",
            icon: faToriiGate,
        },
        {
            title: "Terrace Garden",
            icon: faTree,
        },
        {
            title: "Zen Garden",
            icon: faTreeCity,
        },
        {
            title: "Healing Garden (Herbs & Aromatic Plants)",
            icon: faBox,
        },
        {
            title: "Yoga & Meditation Lawn",
            icon: faDumbbell,
        },
        {
            title: "Club",
            icon: faKaaba,
        },
        {
            title: "Swimming Pool",
            icon: faSwimmingPool,
        },
        {
            title: "Kids Play Zone",
            icon: faChildReaching,
        },
        {
            title: "Party/events Lawn",
            icon: faChampagneGlasses,
        },
        {
            title: "Outdoor Fitness Center",
            icon: faPersonRunning,
        },
        {
            title: "Outdoor Meditation Forest",
            icon: faPersonPraying,
        },
        {
            title: "Tree Court With Seatings",
            icon: faChair,
        },
        {
            title: "Commercial Complex In Vicinity",
            icon: faBuilding,
        },
        {
            title: "Cycling Track",
            icon: faBicycle,
        },
        {
            title: "Basketball Court",
            icon: faBasketball,
        },
        {
            title: "Badminton Court",
            icon: faChild,
        },
        {
            title: "Tennis Court",
            icon: faTableTennis,
        },
        {
            title: "Cricket Practice Area",
            icon: faBaseball,
        },
        {
            title: " Jogging Track",
            icon: faWalking,
        },
        {
            title: "3 Tier Security",
            icon: faShield,
        },
        {
            title: "CCTV surveillance",
            icon: faCamera,
        },
    ]

    return(
        <section className="home-amenities-section py-5 md:py-16 px-2.5" id="amenities">
            <div className='max-w-6xl m-auto'>
                <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 pt-5">
                    {amenities.map((item, i) => (
                        <div className="w-full p-6 flex flex-col gap-4 justify-start items-center rounded-md border-primary-yellow border-2" key={i}>
                            <FontAwesomeIcon icon={item.icon} className="text-5xl text-primary-yellow"/>
                            <h3 className="text-sm font-semibold text-center capitalize">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Amenities