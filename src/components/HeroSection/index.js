import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from "../ButtonElements";
import { Fade } from 'react-reveal'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from "./HeroElement";

const HeroElement = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return(

        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <Fade big duration={4000}>
                <HeroH1>
                    ARTIFICIAL  INTELLIGENCE  AND  ROBOTICS
                </HeroH1>
                </Fade>
                <Fade big duration={5000} delay={1000}>
                <HeroP>
                    We deliver and develop advanced machine learning solutions to help enterprises solve many key business challenges
                </HeroP>
                </Fade>
                <Fade big duration={6000} delay={1500}>
                <HeroBtnWrapper>
                    <Button to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                    >
                        Enroll Now {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </Fade>
            </HeroContent>
        </HeroContainer>

    )
}

export default HeroElement