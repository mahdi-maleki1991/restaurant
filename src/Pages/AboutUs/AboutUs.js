import React from 'react'
import './AboutUs.css'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './../../MediaQuery.css'
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import MyInfos from '../../Components/MyInfos/MyInfos';
import Aos from 'aos';
import 'aos/dist/aos.css'



export default function AboutUs() {




    Aos.init({ once: true })


    // ---------------------------------------

    return (
        <>
            <section className='classChangePage'>
                {/* <Header /> */}
                <Container>
                    <Row>
                        <Col className='colOurMission'>
                            <span className="spanOurMission">OUR MISSION</span>
                            <h2 className="h2OurMission" data-aos='zoom-in-down' data-aos-duration='1000'>Lorem ipsum dolor sit amet consectetur</h2>
                            <p className="pTagOurMission"data-aos='slide-up' data-aos-duration='1000'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga.
                                ipsum dolor sit amet   elit. Earum, fuga.
                                ipsum dolor sit amet consectetur adipisicing elit fuga.
                                Lorem ipsum dolor sit amet consectetur elit.Earum fuga
                                ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga.
                                dolor sit amet consectetur  elit. fuga.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='colSecondOurMission'>
                            <div className="divOneOurMissionAbout">
                                <span data-aos='fade' data-aos-duration='3000'>OUR PEOPLE</span>
                                <h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h2>
                                <p data-aos='slide-right' data-aos-duration='1000'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    At numquam corrupti recusandae officiis
                                    inventore esse iste eum. Tempora debitis possimus quibusdam similique
                                    reprehenderit! Quas, velit vitae id rem pariatur alias.Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit.
                                    At numquam corrupti recusandae officiis
                                    inventore esse iste eum. Tempora debitis possimus quibusdam similique
                                    reprehenderit! Quas, velit vitae id rem pariatur alias.
                                </p>
                                <Link className="Link" to='/'>
                                    <input type="button" className='btnGoHomePageAbout' value="HOME PAGE" />
                                </Link>
                            </div>
                            <div className="divSecondOurMissionAbout">
                                <img className='imgOurMission' src="https://www.nestle.com/sites/default/files/styles/half_half_color_block_image_746_434/public/2023-10/food-service-half.jpg?itok=rID0DoLn" />
                            </div>
                        </Col>
                    </Row>

                </Container>
                <MyInfos />

            </section>
        </>
    )
}
