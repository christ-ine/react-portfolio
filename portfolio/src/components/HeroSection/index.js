import React from 'react'
import HeroImage from '../../images/portimg.jpg'

import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    

    return (
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <ImageBg src={HeroImage} />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Christine Ross</HeroH1>
                    <HeroP>Full Stack</HeroP>
                   
                </HeroContent>
            </HeroContainer>
            
        </>
    )
}

export default HeroSection
