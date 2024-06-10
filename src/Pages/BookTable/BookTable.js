import React from 'react'
import './BookTable.css'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function BookTable() {




    Aos.init({ once: true })


    // ---------------------------------------------------
    return (
        <section className='classChangePage'>

            <div className="divMainBookTable">
                <h1 data-aos='zoom-in-down' data-aos-duration='1000'>Request a reservation</h1>
                <h3>Select your details and we’ll try get the best seats for you</h3>

                <div className="divDAtesKeeperReservation">

                    <div className="divspanAndselector"data-aos='zoom-in-down' data-aos-duration='1000'>
                        <span>Party Size</span>
                        <select className='selectPartySize'>
                            <option value="2 Guests">2 Guests</option>
                            <option value="3 Guests">3 Guests</option>
                            <option value="4 Guests">4 Guests</option>
                            <option value="5 Guests">5 Guests</option>
                            <option value="6 Guests">6 Guests</option>
                            <option value="7 Guests">7 Guests</option>
                            <option value="8 Guests">8 Guests</option>
                            <option value="9 Guests">9 Guests</option>
                            <option value="10 Guests">10 Guests</option>
                            <option value="11 Guests">11 Guests</option>
                            <option value="12 Guests">12 Guests</option>
                            <option value="13 Guests">13 Guests</option>
                            <option value="14 Guests">14 Guests</option>
                            <option value="15 Guests">15 Guests</option>
                            <option value="+15 Guests">+13 Guests</option>
                        </select>
                    </div>

                    <div className="divspanAndselector" data-aos='zoom-in-down' data-aos-duration='1000'>
                        <span>Date</span>
                        <input type="date" className='selectPartySize' />
                    </div>

                    <div className="divspanAndselector" data-aos='zoom-in-down' data-aos-duration='1000'>
                        <span>Time</span>
                        <select className='selectPartySize'>
                            <option value="11 AM">11 AM</option>
                            <option value="12 AM">12 AM</option>
                            <option value="1 PM">1 PM</option>
                            <option value="2 PM">2 PM</option>
                            <option value="3 PM">3 PM</option>
                            <option value="4 PM">4 PM</option>
                            <option value="5 PM">5 PM</option>
                            <option value="6 PM">6 PM</option>
                        </select>
                    </div>

                </div>

                <input type="button" value="Request Now" className='btnReserveRequestNow' />
                <div className='btnHomePageReserve'>
                    <Link to='/' style={{ color: 'orange', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} className='link'>
                        Home Page
                    </Link>
                </div>



            </div>


        </section >
    )
}
