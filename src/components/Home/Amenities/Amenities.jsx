import gate from '../../../assests/images/amnities/gate.png';
import road from '../../../assests/images/amnities/road.png';
import carriageway from '../../../assests/images/amnities/carriageway.png';
import gateSecurity from '../../../assests/images/amnities/security-gate.png';
import security from '../../../assests/images/amnities/security.png';
import garden from '../../../assests/images/amnities/garden.png';
import genGarden from '../../../assests/images/amnities/gen-garden.png';
import herbs from '../../../assests/images/amnities/herbs.png';
import meditation from '../../../assests/images/amnities/meditation.png';
import club from '../../../assests/images/amnities/club.png';
import swimmingPool from '../../../assests/images/amnities/swimming-pool.png';
import playground from '../../../assests/images/amnities/playground.png';
import party from '../../../assests/images/amnities/party.png';
import fitness from '../../../assests/images/amnities/fitness.png';
import meditationForest from '../../../assests/images/amnities/meditation-forest.png';
import treeSeating from '../../../assests/images/amnities/tree-seating.png';
import greenWall from '../../../assests/images/amnities/green-wall.png';
import cycle from '../../../assests/images/amnities/cycle.png';
import basketball from '../../../assests/images/amnities/basketball.png';
import badminton from '../../../assests/images/amnities/badminton.png';
import tennisCourt from '../../../assests/images/amnities/tennis-court.png';
import cricket from '../../../assests/images/amnities/cricket.png';
import theater from '../../../assests/images/amnities/theater.png';
import cinemaAuditorium from '../../../assests/images/amnities/cinema-auditorium.png';
import jogging from '../../../assests/images/amnities/jogging.png';
import basement from '../../../assests/images/amnities/basement.png';
import camera from '../../../assests/images/amnities/security-camera.png';
import carParking from '../../../assests/images/amnities/car-parking.png';

const Amenities = () => {

    const amenities = [
        {
            title: "Entrance Plaza With Trellis",
            icon: gate,
        },
        {
            title: "Pathway (1.2 M Wide)",
            icon: road,
        },
        {
            title: "Carriageway (5.7 M Wide)",
            icon: carriageway,
        },
        {
            title: "Gate Complex & Security Cabin",
            icon: gateSecurity,
        },
        {
            title: "Terrace Garden",
            icon: garden,
        },
        {
            title: "Zen Garden",
            icon: genGarden,
        },
        {
            title: "Healing Garden (Herbs & Aromatic Plants)",
            icon: herbs,
        },
        {
            title: "Yoga & Meditation Lawn",
            icon: meditation,
        },
        {
            title: "Club",
            icon: club,
        },
        {
            title: "Swimming Pool",
            icon: swimmingPool,
        },
        {
            title: "Kids Play Zone",
            icon: playground,
        },
        {
            title: "Party/events Lawn",
            icon: party,
        },
        {
            title: "Outdoor Fitness Center",
            icon: fitness,
        },
        {
            title: "Outdoor Meditation Forest",
            icon: meditationForest,
        },
        {
            title: "Tree Court With Seatings",
            icon: treeSeating,
        },
        {
            title: "Vertical Green Wall",
            icon: greenWall,
        },
        {
            title: "Cycling Track",
            icon: cycle,
        },
        {
            title: "Basketball Court",
            icon: basketball,
        },
        {
            title: "Badminton Court",
            icon: badminton,
        },
        {
            title: "Tennis Court",
            icon: tennisCourt,
        },
        {
            title: "Cricket Practice Area",
            icon: cricket,
        },
        {
            title: "Amphitheater",
            icon: theater,
        },
        {
            title: "Mutipurpose Lawn",
            icon: cinemaAuditorium,
        },
        {
            title: "Jogging Track",
            icon: jogging,
        },
        {
            title: "Basement Entry/exit",
            icon: basement,
        },
        {
            title: "3 Tier Security",
            icon: security,
        },
        {
            title: "CCTV Surveillance",
            icon: camera,
        },
        {
            title: "Abundant Car Parking",
            icon: carParking,
        },
    ]

    return(
        <section className="home-amenities-section py-5 md:py-16 px-2.5" id="amenities">
            <div className='max-w-6xl m-auto'>
                <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 pt-5">
                    {amenities.map((item, i) => (
                        <div className="w-full p-6 flex flex-col gap-4 justify-start items-center rounded-md border-primary-yellow border-2 aminities-group cursor-pointer" key={i}>
                            <img src={item.icon} alt={item.title} className="w-16 animate-wobble" />
                            <h3 className="text-sm font-semibold text-center capitalize">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Amenities