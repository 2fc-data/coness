import React from 'react';
import { HeroContainer } from './Hero.styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from '../ImageSlider/Slider.component';

function Hero() {
  return(
    <HeroContainer>
      <Slider />
    </HeroContainer>
  )
}

export default Hero;
