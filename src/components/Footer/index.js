import React from 'react'
import {
    FooterLinksContainer,
    FooterLinkTitle,
    FooterLinkItems,
    FooterWrap,
    FooterLink,
    FooterLinksWrapper,
    FooterContainer,
} from "./FooterElements";
import {
    SocialMedia,
    SocialLogo,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    WebsiteRights} from "./FooterElements";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import rLogo from "../../images/rLogo.svg";

const Footer = () => {
  return(
      <FooterContainer>
          <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle>About Us</FooterLinkTitle>
                          <FooterLink to="/signin">How it Works</FooterLink>
                          <FooterLink to="/signin">Testimonials</FooterLink>
                          <FooterLink to="/signin">Careers</FooterLink>
                          <FooterLink to="/signin">Investors</FooterLink>
                          <FooterLink to="/signin">Terms of Service</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle>Social Media</FooterLinkTitle>
                      <FooterLink to="/signin">Facebook</FooterLink>
                      <FooterLink to="/signin">Instagram</FooterLink>
                      <FooterLink to="/signin">Twitter</FooterLink>
                      <FooterLink to="/signin">Youtube</FooterLink>
                      <FooterLink to="/signin">LinkedIn</FooterLink>
                  </FooterLinkItems>
                  </FooterLinksWrapper>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>Contact Us</FooterLinkTitle>
                          <FooterLink to="/signin">Contact</FooterLink>
                          <FooterLink to="/signin">Support</FooterLink>
                          <FooterLink to="/signin">Location</FooterLink>
                          <FooterLink to="/signin">Sponsorship</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterLinkTitle>Services</FooterLinkTitle>
                          <FooterLink to="/signin">Field robots</FooterLink>
                          <FooterLink to="/signin">Drones</FooterLink>
                          <FooterLink to="/signin">Medical robots</FooterLink>
                          <FooterLink to="/signin">Defense robots</FooterLink>
                          <FooterLink to="/signin">Logistics robot</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to='/'>
                          <img src={rLogo} height={100} width={100} alt=""/>
                      </SocialLogo>
                      <WebsiteRights>Bluebotech © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                      <SocialIcons>
                          <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
  )
}

export default Footer