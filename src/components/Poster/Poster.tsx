import React from "react";

import styles from '../../styles/Poster.module.css'
import EmblaCarousel from '../Carousel/Carousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {}
const SLIDES = [
    "src/assets/Poster.png",
    "src/assets/Poster.png",
    "src/assets/Poster.png",
    "src/assets/Poster.png",
    "src/assets/Poster.png",
  ]

const Poster = () =>{
    return <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
};

export default Poster;