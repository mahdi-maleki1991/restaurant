import React from 'react'
import './Error404.css'
import { Link } from 'react-router-dom'
import './../../MediaQuery.css'





export default function Error404() {



    // -----------------------------------------
    return (
        <>

            <section className="sec404">
                <span className="span404YouLost">I think you lost !!</span>
                <div className="divWriten404">404</div>
                <button className='btnGoHome404' n>
                    <Link to='/' className='link404'>
                        Home Page
                    </Link>
                </button>
            </section>

        </>
    )
}
