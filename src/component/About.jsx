import React from 'react';
import styled, { keyframes } from 'styled-components';


// Background Animation
const moveBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const AboutContainer = styled.section`
 background-color: rgba(5, 5, 5, 0.94);
  background-size: 300% 300%;
  animation: ${moveBackground} 10s infinite linear;
  color: white;
  display: flex;
  padding: 2rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 4rem;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
  transition: transform 0.4s ease, box-shadow 0.3s ease;
  animation: ${bounce} 2s infinite ease-in-out;

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 768px) {
    width: 200px;
    margin-right: 3rem;
    margin-bottom: 0;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  animation: ${fadeInUp} 1s ease-in-out;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #f0f0f0;
  animation: ${fadeInUp} 1.2s ease-in-out;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  width: 100%;
  animation: ${fadeInUp} 1.5s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.7;
    width: 900px;
  }
`;

const About = () => {
  return (
    
    <AboutContainer id="about">
      <ProfileImage
        src="src/assets/WhatsApp Image 2025-03-11 at 11.37.31 AM.jpeg"
        alt="Your Profile"
      />
      <ContentContainer>
        <Heading>About me</Heading>
        <Description>
          Hey there! I’m Ashwani Bhardwaj, a frontend developer who loves
          building modern, interactive, and efficient web applications. I have
          experience in HTML, CSS, JavaScript, and React, and I enjoy turning
          ideas into reality through clean and functional code. I believe that
          good design and smooth user experience make a website stand out.
          That’s why I focus on crafting interfaces that are not only beautiful
          but also highly usable. Every day, I strive to learn, improve, and stay
          updated with the latest web technologies. When I’m not coding, you’ll
          find me exploring new tech, reading about design trends, or
          experimenting with creative web solutions. Let’s create something
          awesome together! ✨
        </Description>
      </ContentContainer>
    </AboutContainer>
  );
};

export default About;