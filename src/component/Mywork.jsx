import React from 'react';
import styled from 'styled-components';

// Import all your project images
import desktop1Image from '../assets/desktop1.png';
import herosectionImage from '../assets/herosection.png';
import edulleyImage from '../assets/edulley.png';
import jagrukjantaImage from '../assets/jagrukjanta.png';
import healixImage from '../assets/healix.png';
import outfitImage from '../assets/outfit.png';

const MyWorkContainer = styled.section`
  padding: 2rem 1rem; /* Default padding for mobile */
  background-color: rgba(5, 5, 5, 0.94);
  color: white;
  min-height: 80vh; /* Ensure section takes up decent space */
  box-sizing: border-box; /* Include padding in element's total width and height */

  @media (min-width: 768px) {
    padding: 4rem 2rem; /* More padding for tablets and desktops */
  }
`;

const WorkHeading = styled.h2`
  font-size: clamp(2rem, 6vw, 2.5rem); /* Responsive font size for heading */
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  animation: fadeInDown 1s ease-out; /* Optional: Add a simple animation */

  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  /* Responsive grid: min 200px on small screens, scales up to 1fr, fits as many as possible */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1200px; /* Constrain grid width */
  margin: 0 auto; /* Center the grid */

  @media (min-width: 600px) { /* Slightly larger min for tablets */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: 768px) { /* Larger min for desktops */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

const ProjectCard = styled.div`
  background-color: #444;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add box-shadow to transition */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle default shadow */
  cursor: pointer; /* Indicate interactivity */

  &:hover {
    transform: translateY(-8px); /* Slightly more pronounced lift on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Stronger shadow on hover */
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: clamp(150px, 40vw, 200px); /* Responsive height for images */
  object-fit: cover;
  display: block;
`;

const ProjectDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.85); /* Slightly darker overlay */
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  box-sizing: border-box; /* Ensure padding doesn't push content out */

  ${ProjectCard}:hover & {
    transform: translateY(0);
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1rem, 4vw, 1.5rem); /* Responsive font size */
  margin: 0 0 0.5rem 0; /* Add some bottom margin */
`;

const ViewButton = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: clamp(0.8rem, 2.5vw, 0.9rem); /* Responsive font size */
  margin-top: 0.5rem;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px); /* Slight lift on button hover */
  }
`;

const Mywork = () => {
  const projects = [
    {
      title: 'Chirag-web',
      image: desktop1Image, // Use imported image
      url: 'https://chirag-website.vercel.app', // Ensure full URL
    },
    {
      title: 'Select Ease-web',
      image: herosectionImage, // Use imported image
      url: 'https://www.selectease.world/', // Ensure full URL
    },
    {
      title: 'Edulley-web',
      image: edulleyImage, // Use imported image
      url: 'https://edulley.com/', // Correct as it was
    },
    {
      title: 'Jagruk Janta-New',
      image: jagrukjantaImage, // Use imported image
      url: 'https://jagrukjanta.net/', // Correct as it was
    },
    {
      title: 'Healix-Web',
      image: healixImage, // Use imported image
      url: 'https://healix-web.vercel.app/', // Correct as it was
    },
     {
      title: 'OutFit-Q',
      image: outfitImage, // Use imported image
      url: '/', // Correct as it was
    },
  ];

  return (
    <MyWorkContainer id="work">
      <WorkHeading>My Latest Work</WorkHeading>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectDetails>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ViewButton href={project.url} target="_blank" rel="noopener noreferrer">
                View
              </ViewButton>
            </ProjectDetails>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </MyWorkContainer>
  );
};

export default Mywork;