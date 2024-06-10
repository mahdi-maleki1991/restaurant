import React from 'react'
import './BoxOutSide.css'
import 'bootstrap/dist/css/bootstrap.css'
import { MdHealthAndSafety } from "react-icons/md";
import './../../MediaQuery.css'
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function BoxOutSide() {


    Aos.init({ once: true })


    // -------------------------------------------------

    return (
        <>

            <section className="secBoxOutSide">

                <div className='divTextsKeeperBoxOut'>
                    <h2 data-aos='slide-down' data-aos-duration='1100'>Lorem ipsum dolor sit.</h2>
                    <p data-aos='slide-down' data-aos-duration='1000'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aperiam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aperiam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aperiam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aperiam.
                    </p>
                </div>

                <div className="divBoxKeeperOutSide">
                    <div className="divsBoxOutSide" data-aos='slide-right' data-aos-duration='1000'>
                        <MdHealthAndSafety className='iconsInBoxesOut' />
                        <h3>Safty Food</h3>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta.
                        </span>
                    </div>
                    <div className="divsBoxOutSide" data-aos='slide-up' data-aos-duration='1000'>
                        <MdHealthAndSafety className='iconsInBoxesOut' />
                        <h3>Restaurant Licence</h3>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta.
                        </span>
                    </div>
                    <div className="divsBoxOutSide"data-aos='slide-left' data-aos-duration='1000'>
                        <MdHealthAndSafety className='iconsInBoxesOut' />
                        <h3>Health Licence</h3>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta.
                        </span>
                    </div>
                </div>
            </section>

        </>
    )
}
