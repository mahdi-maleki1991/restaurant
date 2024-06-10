import React, { useRef, useState } from 'react'
import './OurGallery.css'
import 'bootstrap/dist/css/bootstrap.css'
import './../../MediaQuery.css'
import { TfiClose } from "react-icons/tfi";
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function OurGallery() {


    const [openGaleryImg, setOpenGaleryImg] = useState(true)
    const refImgShowWinGallery = useRef()

    const openImgGaleryFunc = (event) => {
        refImgShowWinGallery.current.setAttribute('src', event.target.getAttribute('src'))
        setOpenGaleryImg(false)
    }
    Aos.init({ once: true })


    // ------------------------------------------

    return (
        <>


            <section className='secOurGallery'>
                <div className="divRowOurGallery">
                    <h2 data-aos='slide-up' data-aos-duration='600'>OUR GALLERY</h2>
                    <p data-aos='flip-up' data-aos-duration='1000'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, odit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, odit.
                        Lorem, ipsum dolor sit amet consectetur.
                    </p>
                </div>

                <div className="divImgaesOurGallery">

                    <div className="divIMGholderOurGallery" data-aos='fade' data-aos-duration='1300'>
                        <img className='imgOurGallery' onClick={(event) => openImgGaleryFunc(event)}
                            src="https://assets-prd.punchdrink.com/wp-content/uploads/2018/10/Article-Caffe-Corretto-Italian-Espresso-Grappa-Amaro-Cocktail-recipe.jpg" />
                    </div>
                    <div className="divIMGholderOurGallery" data-aos='fade' data-aos-duration='1300'>
                        <img className='imgOurGallery' onClick={(event) => openImgGaleryFunc(event)}
                            src="https://www.seriouseats.com/thmb/3iSOYHG9SIqq2BvORNYJXMAF6uY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__drinks.seriouseats.com__images__20110615-caffe-corretto-610-48f5402b759a45cbbb058b6e95ab00fc.jpg" />
                    </div>
                    <div className="divIMGholderOurGallery" data-aos='fade' data-aos-duration='1300'>
                        <img className='imgOurGallery' onClick={(event) => openImgGaleryFunc(event)}
                            src="https://img1.wsimg.com/isteam/ip/7b066d6e-327b-4613-9820-b769e2497ed2/12-(PDG_Caffe-Buondi).jpg" />
                    </div>
                    <div className="divIMGholderOurGallery" data-aos='fade' data-aos-duration='1300'>
                        <img className='imgOurGallery' onClick={(event) => openImgGaleryFunc(event)}
                            src="https://www.lavazzausa.com/content/dam/lavazza-athena/b2c/stories/article/coffee-secrets/how-to-make-caffe-leccese/hero/m-recipe-caffe-leccese.jpg" />
                    </div>
                    <div className="divIMGholderOurGallery" data-aos='fade' data-aos-duration='1300'>
                        <img className='imgOurGallery' onClick={(event) => openImgGaleryFunc(event)}
                            src="https://www.usatoday.com/gcdn/-mm-/f20fc5c58a31f07fb8c4e4f7cca8d828e6648472/c=0-0-1819-1368/local/-/media/USATODAY/USATODAY/2014/06/13/1402691450006-7-milsteadandco.jpg" />
                    </div>
                    <div className="divIMGholderOurGallery" data-aos='fade' data-aos-duration='1300'>
                        <img className='imgOurGallery' onClick={(event) => openImgGaleryFunc(event)}
                            src="https://cdn.shopify.com/s/files/1/0557/9564/6637/files/IMG_14_6041557c-1450-40fb-aed1-dd67b6b987ce.jpg?v=1619471367" />
                    </div>
                    <div className="divIMGholderOurGallery" data-aos='fade' data-aos-duration='1300'>
                        <img className='imgOurGallery' onClick={(event) => openImgGaleryFunc(event)}
                            src="https://specialcoffeeitaly.com/wp-content/uploads//2019/08/cold-brew-coffee-1.jpg" />
                    </div>

                </div>
            </section >

            {/* ---------------Open Window IMG---------------- */}


            < div className={openGaleryImg ? "divOpenWindowOurGallery" : "refImgShowWinGalleryActive"} >
                <TfiClose className='openCloseWinGallery' onClick={() => setOpenGaleryImg(true)} />
                <img className='imgInOpenCloseWinGallery' ref={refImgShowWinGallery} src="https://specialcoffeeitaly.com/wp-content/uploads//2019/08/cold-brew-coffee-1.jpg" />
            </div >


        </>
    )
}
