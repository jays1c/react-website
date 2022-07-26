import React from 'react'
import {Button} from '../ButtonElements'
import {Fade} from 'react-reveal'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TextWrapper,
    Column1,
    Column2,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from "./InfoElements";

const InfoSection = ({
    lightBg, id, imgStart, topLine,
    lightText, headline, darkText,
    description, buttonLabel, img,
    alt, primary, dark, dark2
                     }) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>

                    <Column1>
                        <Fade right duration={1500}>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Fade>
                    </Column1>
                    <Fade left duration={1500}>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                    </Fade>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}
export default InfoSection


