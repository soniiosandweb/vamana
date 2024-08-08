import { faInstagram, faLinkedin, faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return(
        <section className="bg-primary-green text-white py-4 text-sm">
            <div className='max-w-6xl m-auto px-2.5'>
                <div className="flex flex-col md:flex-row pb-4">
                    <div className="w-full md:w-1/3 p-2.5 flex flex-col pb-3 md:pb-0">
                        <p>Site Location: Green Lotus Saksham, Zirakpur Patiala Highway</p>
                    </div>
                    <div className="w-full md:w-1/3 p-2.5 flex flex-col pb-3 md:pb-0">
                        <p>Contact: <a href="tel:+91- 70589-70589">+91- 70589-70589</a></p>
                    </div>
                    <div className="w-full md:w-1/3 p-2.5 flex flex-col">
                        <ul className="text-3xl flex gap-3 justify-center">
                            <li>
                                <a href="/"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                            </li>
                            <li>
                                <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                            </li>
                            <li>
                                <a href="/"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mt-4 pt-4 border-t">
                    <div className="w-full md:w-1/2 p-2.5 flex flex-col pb-3 md:pb-0">
                        <p>Copyright © 2023 Green Lotus Group</p>
                    </div>
                    <div className="w-full md:w-1/2 p-2.5 flex flex-col">
                        <p>Powered by Green Lotus Group</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer