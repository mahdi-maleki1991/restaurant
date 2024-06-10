import React, { useState } from 'react'
import './Header.css'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { TfiClose } from "react-icons/tfi";
import { IoMenu } from "react-icons/io5";
import './../../MediaQuery.css'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'



export default function Header() {

    const [openCloseMenu, setOpenCloseMenu] = useState(true)


    Aos.init({ once: true })

    const goToConectArea = () => {
        if (!openCloseMenu) {
            setOpenCloseMenu(true)
            setTimeout(() => {
                window.scroll({
                    top: window.document.body.scrollHeight,
                    left: 0,
                    behavior: "smooth",
                });
            }, 800);
        } else {
            window.scroll({
                top: window.document.body.scrollHeight,
                left: 0,
                behavior: "smooth",
            });
        }
    }



    // -------------------------------------------

    return (
        <>

            <section className='sectionConHeader'>
                <img src="https://www.vancouverplanner.com/wp-content/uploads/2022/05/vancouver-smoked-salmon.jpg" className='imgBackgroundHeader' />

                <div className="divShadowHeder">

                    <div className="divNavbarHeader">
                        <img className='logoHeader' data-aos='zoom-in-down' data-aos-duration='1000'
                        src="https://marketplace.canva.com/EAFoTsKFEgM/1/0/1600w/canva-abstract-mascot-fishing-free-logo-0wf8G63zd3A.jpg" />
                        <ul className='navBarHeaderUI d-none d-md-flex'>
                            <li><Link to='/' className='link'>HOME</Link></li>
                            <li><Link to='/AboutUs' className='link'>ABOUT US</Link></li>
                            <li><Link to='Menu' className='link'>MENU</Link></li>
                            <li onClick={goToConectArea}>sign up</li>
                            <li><Link to="/BookTable" className='link'> BOOK A TABLE</Link></li>
                        </ul>
                        <IoMenu className='icon3LineMenu d-flex d-md-none' onClick={() => setOpenCloseMenu(false)} />
                    </div>

                    <div className="divConHeaderTextImg pt-3 pt-md-5 d-none d-sm-flex">
                        <div className="divHolderTextHeder ">
                            <h1 className='textInHeader ' data-aos='slide-up' data-aos-duration='1000'
                            >ENJOY OUR DELICIOUS MEAL</h1>
                            <p data-aos='slide-down' data-aos-duration='1000'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, vel.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, vel.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, vel.
                            </p>
                            <div className="divBTNheaderHolder d-none d-md-flex">
                                <input type="button" value="BOOK A TABLE" className='btnBookTableHeader'
                                    data-aos='flip-up' data-aos-duration='1000' data-aos-delay='1100'/>
                            </div>
                        </div>
                        <img
                            data-aos='slide-left' data-aos-duration='1000'
                            className='imgMidleHeader d-none d-xl-flex' src="https://static.vecteezy.com/system/resources/previews/022/983/464/non_2x/fresh-malabar-trevally-fish-decorated-with-herbs-and-fruits-free-png.png" />
                    </div>
                </div>

            </section>
            {/* --------------Smal Menu------------------ */}
            <div className={openCloseMenu ? 'divSmalMenuHeader' : 'divSmalMenuHeaderActive'}>
                <TfiClose className='iconCloseSmalMenu' onClick={() => setOpenCloseMenu(true)} />

                <ul className="ulSmalMenuHeader">
                    <h1 className='textInHeaderSmall'>ENJOY OUR DELICIOUS MEAL</h1>
                    <li><Link to='/' className='link'>HOME</Link></li>
                    <li><Link to='/AboutUs' className='link'>ABOUT US</Link></li>
                    <li><Link to='Menu' className='link'>MENU</Link></li>
                    <li onClick={goToConectArea}>sign up</li>
                    {/* <li> BOOK A TABLE</li> */}
                    <li className='liBookATableSmallMenu'><Link to="/BookTable" className='link'> BOOK A TABLE</Link></li>

                </ul>
            </div>


        </>
    )
}
