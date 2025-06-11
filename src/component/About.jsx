import React from 'react';
import styled, { keyframes } from 'styled-components';

// Import your image directly - RECOMMENDED WAY FOR VITE
import ProfilePic from '../assets/whatsappImage.png'; // Ensure this path is correct

// Background Animation (already defined, kept for consistency)
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
  background-size: 300% 300%; /* Applied to create the animated background effect */
  animation: ${moveBackground} 10s infinite linear; /* Apply animation */
  color: white;
  display: flex;
  padding: 2rem 1rem; /* Adjust padding for mobile-first */
  align-items: center;
  flex-direction: column; /* Default to column for mobile-first */
  justify-content: center;
  text-align: center;
  overflow: hidden;
  min-height: 80vh; /* Ensure it takes up a good portion of the screen */
  box-sizing: border-box; /* Include padding in element's total width and height */
  gap: 2rem; /* Spacing between image and content container */

  @media (min-width: 768px) {
    flex-direction: row; /* Row layout for tablets and desktops */
    padding: 4rem;
    gap: 3rem; /* More space between image and text on desktop */
  }
`;

const ProfileImage = styled.img`
  width: clamp(120px, 40vw, 200px); /* Responsive width: min 120px, max 200px */
  height: auto; /* Maintain aspect ratio */
  border-radius: 5px;
  margin-bottom: 1rem; /* Keep margin for mobile */
  transition: transform 0.4s ease, box-shadow 0.3s ease;
  animation: ${bounce} 2s infinite ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Base shadow */

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Stronger shadow on hover */
  }

  @media (min-width: 768px) {
    /* When flex-direction is row, margin-right creates space */
    margin-right: 0; /* Reset margin-right if using gap */
    margin-bottom: 0; /* Remove bottom margin on desktop */
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  animation: ${fadeInUp} 1s ease-in-out;
  max-width: 900px; /* Constrain content width */
  text-align: center; /* Default for mobile */

  @media (min-width: 768px) {
    text-align: left; /* Align text left on larger screens */
  }
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 6vw, 2.5rem); /* Responsive font size */
  margin-bottom: 1rem;
  color: #f0f0f0;
  animation: ${fadeInUp} 1.2s ease-in-out;
`;

const Description = styled.p`
  font-size: clamp(0.95rem, 2.5vw, 1.1rem); /* Responsive font size */
  line-height: 1.6; /* Slightly increased line height for readability */
  margin-bottom: 1.5rem;
  max-width: 100%; /* Allow it to take full width of ContentContainer on mobile */
  animation: ${fadeInUp} 1.5s ease-in-out;
  margin-left: auto; /* Center the paragraph itself */
  margin-right: auto; /* Center the paragraph itself */

  @media (min-width: 768px) {
    max-width: 900px; /* Constrain width on larger screens */
    line-height: 1.7;
    text-align: left; /* Align text left on larger screens */
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <ProfileImage
        src={ProfilePic} // Use the imported image variable
        alt="Ashwani Bhardwaj - Profile Picture" // More descriptive alt text
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