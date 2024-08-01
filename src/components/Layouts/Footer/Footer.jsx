import { faInstagram, faLinkedin, faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return(
        <section className="bg-primary-green text-white py-4 text-sm">
            <Container>
                <Row>
                    <Col md={4} className="pb-3 md:pb-0">
                        <p>Site Location: Green Lotus Saksham, Zirakpur Patiala Highway</p>
                    </Col>
                    <Col md={4} className="pb-3 md:pb-0">
                        <p>Contact: <a href="tel:+91- 70589-70589">+91- 70589-70589</a></p>
                    </Col>
                    <Col md={4}>
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
                    </Col>
                </Row>
                <Row className="mt-4 pt-4 border-t">
                    <Col md={6} className="pb-3 md:pb-0">
                        <p>Copyright © 2023 Green Lotus Group</p>
                    </Col>
                    <Col md={6}>
                        <p>Powered by Green Lotus Group</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer