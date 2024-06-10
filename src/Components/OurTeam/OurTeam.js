import React from 'react'
import './OurTeam.css'
import './../../MediaQuery.css'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'





export default function OurTeam() {



    Aos.init({ once: true })

    // ----------------------------------------

    return (
        <>

            <Container className='conOurTeam'>

                <Row>
                    <Col className='ColOurTeamRowOne'>
                        <h2 data-aos='fade' data-aos-duration='2000'>OUR TEAM</h2>
                        <p data-aos='slide-down' data-aos-duration='1000'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat.
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat.
                        </p>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col className='p-2' xs={12} xl={6} data-aos='slide-right' data-aos-duration='1000'>
                        <div className="divColOurTeamBoxes justify-content-center justify-content-lg-start justify-content-lg-center">
                            <img src="https://i.pinimg.com/736x/92/fb/7a/92fb7ae201d0e508d2acc44bf70a0175--male-faces-interesting-faces.jpg" />
                            <div className="DivInfoManagers">
                                <h2>MAHDI MALEKI</h2>
                                <span>Front-End Developer</span>
                                <div className="divSocialMediaOurTeam">
                                    <FaInstagram className='iconsSocialOurTeam' />
                                    <CiTwitter className='iconsSocialOurTeam' />
                                    <FaFacebookF className='iconsSocialOurTeam' />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit Debitis.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit Debitis.
                                    consectetur adipisicing elit Debitis.
                                    t, consectetur adipisicing elit Debitis.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='p-2' xs={12} xl={6} data-aos='slide-left' data-aos-duration='1000'>
                        <div className="divColOurTeamBoxes justify-content-center justify-content-lg-start justify-content-lg-center">
                            <img src="https://www.sagevestwealth.com/wp-content/uploads/2017/08/Businessman.jpg" />
                            <div className="DivInfoManagers">
                                <h2>AMIR NAJMI</h2>
                                <span>Restaurant-Manager</span>
                                <div className="divSocialMediaOurTeam">
                                    <FaInstagram className='iconsSocialOurTeam' />
                                    <CiTwitter className='iconsSocialOurTeam' />
                                    <FaFacebookF className='iconsSocialOurTeam' />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit Debitis.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit Debitis.
                                    consectetur adipisicing elit Debitis.
                                </p>
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>



        </>
    )
}
