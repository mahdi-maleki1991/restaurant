import React from 'react'
import './OurMenu.css'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { IoFishOutline } from "react-icons/io5";
import { TbMeat } from "react-icons/tb";
import { LuSoup } from "react-icons/lu";
import { BiDrink } from "react-icons/bi";
import Aos from 'aos';
import 'aos/dist/aos.css'



export default function OurMenu() {

    Aos.init({ once: true })


    // ----------------------------------------

    return (
        <>

            <Container fluid className="ConOurMenu">
                <Row className='d-flex w-100 p-0 m-0'>

                    <Col className="ColIconsOurMenu" xs={12} md={6} lg={{ span: 5, offset: 1 }}>
                        <div className="divBoxOurMenu" data-aos='slide-down' data-aos-duration='1000'>
                            <IoFishOutline className='iconOurMenuAnimal' />
                            <span className='spanNameIcon'>FISH</span>
                        </div>
                        <div className="divBoxOurMenu" data-aos='slide-down' data-aos-duration='1000'>
                            <TbMeat className='iconOurMenuAnimal' />
                            <span className='spanNameIcon'>MEAT</span>
                        </div>
                        <div className="divBoxOurMenu" data-aos='slide-up' data-aos-duration='1000'>
                            <LuSoup className='iconOurMenuAnimal' />
                            <span className='spanNameIcon'>SOUP</span>
                        </div>
                        <div className="divBoxOurMenu" data-aos='slide-up' data-aos-duration='1000'>
                            <BiDrink className='iconOurMenuAnimal' />
                            <span className='spanNameIcon'>BEVERAGE</span>
                        </div>
                    </Col>


                    <Col className="ColTextOurMenu" xs={12} md={6} lg={{ span: 5, }} data-aos='slide-left' data-aos-duration='1000'>
                        <h2>OUR MENU</h2>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Enim, accusantium. consectetur adipisicing elit. Enim, accusantium.
                            consectetur adipisicing elit. Enim, accusantium.
                        </p>
                        <div className="divBtnOurMenu">
                            <input type="button" value="VIEW ALL MENU" className='btnOurMenu' />
                        </div>
                    </Col>
                </Row>

            </Container>

        </>
    )
}
