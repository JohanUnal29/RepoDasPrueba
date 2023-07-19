import React from 'react';
import Carousell from '../subcomponents/carousel/Carousel';
import Banner from '../subcomponents/banner/Banner';
import Navbar from '../subcomponents/navbar/Navbar';
import './Home.css';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Carousell/>
        <Banner/>
    </div>
  )
}
