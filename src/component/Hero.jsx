import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Background Animation
const moveBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroContainer = styled.section`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  text-align: left;
  background: linear-gradient(45deg,rgb(181, 174, 188),rgb(3, 0, 5),rgb(172, 173, 176));
  background-size: 300% 300%;
  animation: ${moveBackground} 10s infinite linear;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;

  @media (min-width: 768px) {
    height: 100vh;
    padding: 4rem 4rem;
  }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  animation: ${fadeInUp} 1s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 1rem;
  animation: ${fadeInUp} 1.2s ease-in-out;
  text-align: center;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 5px solid white;
  transition: transform 0.4s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const HeroHeading = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.5rem;
  color: white;
  font-weight: 700;
  line-height: 1.2;
  animation: ${fadeInUp} 1.5s ease-in-out;
  text-align: center;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: white;
  line-height: 1.5;
  margin-bottom: 2rem;
  max-width: 500px;
  animation: ${fadeInUp} 1.8s ease-in-out;
  text-align: center;
`;

const pulseEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const ActionButton = styled.a`
  background-color: #0056b3;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  animation: ${pulseEffect} 2s infinite;

  &:hover {
    background-color:#552288;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 2rem;
  color: white;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: inherit;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: rotate(10deg) scale(1.1);
    color: #552288;
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home" >
      <ContentWrapper>
        <ImageContent>
          <ProfileImage src="src/assets/Ashwani.jpeg" alt="Ashwani Bhardwaj" />
        </ImageContent>
        <TextContent>
          <HeroHeading>Hi There, I'm Ashwani Bhardwaj</HeroHeading>
          <HeroDescription>I Am Into Frontend Development and Web Design</HeroDescription>
          <ButtonContainer>
            <ActionButton href="#about">About Me</ActionButton>
          </ButtonContainer>
          <SocialIcons>
            <SocialLink href="https://www.linkedin.com/in/ashwani-bhardwajj" target="_blank"><FaLinkedin /></SocialLink>
            <SocialLink href="https://github.com/ashwanicodee" target="_blank"><FaGithub /></SocialLink>
            <SocialLink href="https://www.instagram.com/__xx_dude_xx__/" target="_blank"><FaInstagram /></SocialLink>
          </SocialIcons>
        </TextContent>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
