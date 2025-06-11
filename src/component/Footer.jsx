import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: rgb(26, 26, 46);
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  padding: 0 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #552288;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.span`
  margin-left: 0.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #552288;
  }
`;

const DesignedWith = styled.div`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1rem;
`;

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <Section>
          <Title>Ashwani's Portfolio</Title>
          <Text>Thank you for visiting my personal portfolio website. Connect with me over socials.</Text>
          <Text>Keep Rising 🚀.</Text>
        </Section>
        <Section>
          <Title>Quick Links</Title>
          <List>
            <ListItem onClick={() => scrollToSection("home")}>Home</ListItem>
            <ListItem onClick={() => scrollToSection("about")}>About</ListItem>
            <ListItem onClick={() => scrollToSection("skills")}>Skills</ListItem>
            <ListItem onClick={() => scrollToSection("work")}>Work</ListItem>
          </List>
        </Section>
        <Section>
          <Title>Contact Info</Title>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <ContactText>+91-8433177868</ContactText>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <ContactText>ashwani.codee@gmail.com</ContactText>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <ContactText>Uttarakhand, India</ContactText>
            </ContactItem>
          </ContactInfo>
          <SocialIcons>
            <SocialIcon href="https://www.linkedin.com/in/ashwani-bhardwajj/" target="_blank"><FaLinkedin /></SocialIcon>
            <SocialIcon href="https://github.com/ashwanicodee" target="_blank"><FaGithub /></SocialIcon>
            <SocialIcon href="https://api.whatsapp.com/send?phone=8433177868&text=Hello!" target="_blank"><FaWhatsapp /></SocialIcon>
            <SocialIcon href="mailto:ashwani.codee@gmail.com" target="_blank"><FaEnvelope /></SocialIcon>
          </SocialIcons>
        </Section>
      </ContentWrapper>
      <DesignedWith>Designed With 💀 By Ashwani Bhardwaj</DesignedWith>
    </FooterContainer>
  );
};

export default Footer;
