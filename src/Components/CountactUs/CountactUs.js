import React from 'react'
import './CountactUs.css'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { CiPhone } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Aos from 'aos';
import 'aos/dist/aos.css'




export default function CountactUs() {



    Aos.init({ once: true })


    // ----------------------------------------------

    return (
        <>


            <Container className="conCountactUs">
                <Row className='d-flex justify-content-center pt-4 pb-4'>
                    <Col xs={12} md={10} lg={6}>
                        <div className="divInfoConectUs">
                            <h2 data-aos='zoom-in-down' data-aos-duration='1000'>Regestration</h2>
                            <p data-aos='slide-right' data-aos-duration='1000'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, praesentium.
                            , ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                            , ipsum dolor sit amet consectetur adipisicing elit. Pariatur.
                            </p>
                            <div className="divInputKeeperContactus">
                                <CiUser className='iconInputsContactus' />
                                <input type="text" className='inputsInConectUs' placeholder='Name'/>
                            </div>
                            <div className="divInputKeeperContactus">
                                <TfiEmail className='iconInputsContactus' />
                                <input type="text" className='inputsInConectUs' placeholder='Email' />
                            </div>
                            <div className="divInputKeeperContactus">
                                <CiPhone className='iconInputsContactus' />
                                <input type="text" className='inputsInConectUs' placeholder='Phone Number' />
                            </div>
                            <div className="divInputKeeperContactus">
                                <CiLock className='iconInputsContactus' />
                                <input type="text" className='inputsInConectUs' placeholder='Password' />
                            </div>

                            <input type="button" value="sign up" className='btnRegestrationContactus' />
                        </div>
                    </Col>
                    <Col xs={12} md={10} lg={6} className='pt-5 pt-lg-0'>
                        <div className="divMapConectUs">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20888.28166515111!2d-123.19931722304688!3d49.12396648552758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485e1e43d6ec9cd%3A0x958fda7643bc1c3!2sLAVASH%20SEASIDE%20GRILL!5e0!3m2!1sen!2sca!4v1717637394713!5m2!1sen!2sca" className='ifromTagMapContactus'></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>



        </>
    )
}
