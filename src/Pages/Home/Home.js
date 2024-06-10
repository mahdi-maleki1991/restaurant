import React from 'react'
import Header from '../../Components/Header/Header'
import OurMenu from '../../Components/OurMenu/OurMenu'
import OurGallery from '../../Components/OurGallery/OurGallery'
import BoxOutSide from '../../Components/BoxOutSide/BoxOutSide'
import OurTeam from '../../Components/OurTeam/OurTeam'
import CountactUs from '../../Components/CountactUs/CountactUs'
import MyInfos from '../../Components/MyInfos/MyInfos'

export default function Home() {




  return (
    <>

      <section className='classChangePage'>

        <Header />
        <OurMenu />
        <OurGallery />
        <BoxOutSide />
        <OurTeam />
        <CountactUs />
        <MyInfos />

      </section>

    </>
  )
}
