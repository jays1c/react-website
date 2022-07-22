import React from 'react'
import Icon1 from '../../servicesImg/serv1.svg'
import Icon2 from '../../servicesImg/serv2.svg'
import Icon3 from '../../servicesImg/serv3.svg'
import { Fade } from  'react-reveal'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesH2,
    ServicesIcon,
    ServicesP
} from './ServicesElements'
import './index.css'

const Services = () => {
    return(
        <ServicesContainer id='services'>
            <Fade right duration={1500}>
                <ServicesH1>Our Services</ServicesH1>
            </Fade>

            <ServicesWrapper>
                <Fade right duration={1700}>
                <ServicesCard >
                    <ServicesIcon>
                        <img className="servIcon" src={Icon1} alt="1"/>
                        <ServicesH2>Predictive Analysis</ServicesH2>
                        <ServicesP>
                            We design, build, train, and deploy machine learning and deep
                            learning models to identify underlying patterns.
                        </ServicesP>
                    </ServicesIcon>
                </ServicesCard>
                </Fade>
                <Fade right duration={1900}>
                <ServicesCard>
                    <ServicesIcon>
                        <img className="servIcon" src={Icon2} alt="2"/>
                        <ServicesH2>Deep Learning</ServicesH2>
                        <ServicesP>
                            Increase the performance of forecasting, decision-making and other
                            important operations with our deep learning services.
                        </ServicesP>
                    </ServicesIcon>
                </ServicesCard>
                </Fade>
                <Fade right duration={2100}>
                <ServicesCard>
                    <ServicesIcon>
                        <img className="servIcon" src={Icon3} alt="1"/>
                        <ServicesH2>Computer Vision</ServicesH2>
                        <ServicesP>
                            Leveraging ML and deep learning techniques in tandem
                            to extract relevant and actionable information from images and videos.
                        </ServicesP>
                    </ServicesIcon>
                </ServicesCard>
                </Fade>
            </ServicesWrapper>
        </ServicesContainer>
    )
}
export default Services