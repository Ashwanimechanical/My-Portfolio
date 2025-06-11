import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Import your image directly - RECOMMENDED WAY FOR VITE
import ProfilePic from '../assets/ashwani.jpeg'; // Ensure this path is correct

// Background Animation
const moveBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroContainer = styled.section`
  min-height: 100vh; /* Use min-height for full viewport height, allowing content to expand if needed */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem; /* Reduced horizontal padding for smaller screens by default */
  text-align: center; /* Default text-align for mobile-first approach */
  background: linear-gradient(45deg, rgb(181, 174, 188), rgb(3, 0, 5), rgb(172, 173, 176));
  background-size: 300% 300%;
  animation: ${moveBackground} 10s infinite linear;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;

  @media (min-width: 768px) {
    padding: 4rem; /* More padding for tablets and desktops */
    text-align: left; /* Align text left on larger screens */
  }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Default to column for mobile-first */
  align-items: center; /* Center items when stacked vertically */
  max-width: 1200px;
  width: 100%;
  animation: ${fadeInUp} 1s ease-in-out;
  gap: 2rem; /* Spacing between image and text content */

  @media (min-width: 768px) {
    flex-direction: row; /* Row layout for tablets and desktops */
    justify-content: space-between; /* Space out image and text content */
    align-items: center; /* Align items to center of the row */
  }
`;

const TextContent = styled.div`
  flex: 1;
  order: 2; /* Text content after image on mobile by default */
  animation: ${fadeInUp} 1.2s ease-in-out;
  text-align: center; /* Ensure all text is centered on mobile */
  padding: 0 1rem; /* Add some horizontal padding to prevent text from touching edges */

  @media (min-width: 768px) {
    order: unset; /* Reset order for desktop */
    padding-right: 2rem; /* Space between text and image on desktop */
    text-align: left; /* Align text left on larger screens */
  }
`;

const ImageContent = styled.div`
  flex: 1;
  order: 1; /* Image first on mobile by default */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0; /* Add some vertical padding */

  @media (min-width: 768px) {
    order: unset; /* Reset order for desktop */
    padding-left: 2rem; /* Space between image and text on desktop */
    margin-top: 0; /* Ensure no residual negative margins */
  }
`;

const ProfileImage = styled.img`
  width: clamp(180px, 60vw, 250px); /* Responsive width: min 180px, max 250px, scales with viewport width */
  height: clamp(180px, 60vw, 250px); /* Maintain aspect ratio */
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); /* Slightly stronger shadow */
  border: 5px solid white;
  transition: transform 0.4s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Stronger shadow on hover */
  }
`;

const HeroHeading = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4rem); /* Responsive font size for heading */
  margin-bottom: 0.5rem;
  color: white;
  font-weight: 700;
  line-height: 1.2;
  animation: ${fadeInUp} 1.5s ease-in-out;
`;

const HeroDescription = styled.p`
  font-size: clamp(1rem, 3.5vw, 1.2rem); /* Responsive font size for description */
  color: white;
  line-height: 1.5;
  margin-bottom: 2rem;
  max-width: 500px;
  animation: ${fadeInUp} 1.8s ease-in-out;
  margin-left: auto; /* Centers the block itself */
  margin-right: auto; /* Centers the block itself */
`;

const pulseEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap if needed */
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
  white-space: nowrap; /* Prevent button text from wrapping */
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  animation: ${pulseEffect} 2s infinite;

  &:hover {
    background-color:#552288;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.8rem; /* Slightly smaller button for mobile */
    font-size: 0.95rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: clamp(1.8rem, 6vw, 2.5rem); /* Responsive icon size */
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
    <HeroContainer id="home">
      <ContentWrapper>
        {/* Image content */}
        <ImageContent>
          {/* Using the imported image variable */}
          <ProfileImage src={ProfilePic} alt="Ashwani Bhardwaj - Frontend Developer and Web Designer" />
        </ImageContent>
        {/* Text content */}
        <TextContent>
          <HeroHeading>Hi There, I'm Ashwani Bhardwaj</HeroHeading>
          <HeroDescription>I Am Into Frontend Development and Web Design</HeroDescription>
          <ButtonContainer>
            <ActionButton href="#about">About Me</ActionButton>
          </ButtonContainer>
          <SocialIcons>
            <SocialLink href="https://www.linkedin.com/in/ashwani-bhardwajj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><FaLinkedin /></SocialLink>
            <SocialLink href="https://github.com/ashwanicodee" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><FaGithub /></SocialLink>
            <SocialLink href="https://www.instagram.com/__xx_dude_xx__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"><FaInstagram /></SocialLink>
          </SocialIcons>
        </TextContent>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;