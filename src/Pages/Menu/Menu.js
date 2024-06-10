import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './Menu.css'
import { mainMenu } from '../../data';
import './../../MediaQuery.css'
import { Link } from 'react-router-dom';
import MyInfos from '../../Components/MyInfos/MyInfos';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Menu() {


    Aos.init({ once: true })

    // ----------------------------------------------
    return (
        <>
            <section className="classChangePage">

                <Container>

                    <Row className='eee'>
                        <Link className='link' to='/'>
                            <input type="button" value="Home page" className='btnHomePageMenu' />
                        </Link>
                        <Col className='colRowOneMenu'>
                            <h2 data-aos='zoom-in-down' data-aos-duration='1000'>Modern approach to classic recipes</h2>
                            <p>
                                We welcome you to a delicious feast of exquisite dishes. With a wide range of world
                                cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant!
                                Here you will dive into a friendly and romantic atmosphere and enjoy our haute cuisine.
                                With our great selection of dishes from all over the world you can feel yourself as a traveler
                                and true gourmet! choose from, we guarantee you a sumptuous feast experience in our restaurant!
                                Here you will dive into a friendly and romantic atmosphere and enjoy our haute cuisine.
                                With our great selection.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='conTwoMenu'>
                            <h2>Main Menu</h2>
                        </Col>
                    </Row>
                    {
                        mainMenu.map((item, index) => (
                            <Row className='rowMainMenuToShowFoods' key={item.id}
                                data-aos='slide-right' data-aos-duration='1000'>
                                <Col className={index % 2 == 0 ? 'order-1' : 'order-2'} xs={12} lg={6}>
                                    <div className="divOneInMenu">
                                        <span className="spanMenuName">{item.name}</span>
                                        <span className="spanMenuPrice">{item.prise} $</span>
                                        <div>
                                            {
                                                item.ingrediant.map((ingradiants, index) => (
                                                    <span key={index} className="spanIngradiantMenu">{ingradiants} </span>
                                                ))
                                            }
                                        </div>
                                        <p className="pTagDesMenuFood">{item.des}</p>
                                        <input type="button" value="ORDER" className='btnOrderInMenu' />
                                    </div>
                                </Col>

                                <Col className='order-1' xs={12} lg={6}>
                                    <div className="divTowInMenu">
                                        <img className='imgEachFoodMenu' src={item.img} />
                                    </div>
                                </Col>
                            </Row>
                        ))
                    }

                </Container>

                <MyInfos />
            </section>
        </>
    )
}
