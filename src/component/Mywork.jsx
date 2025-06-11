import React from 'react';
import styled from 'styled-components';

const MyWorkContainer = styled.section`
  padding: 2rem 1rem;
  background-color: rgba(5, 5, 5, 0.94);
  color: white;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const WorkHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: white;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

const ProjectCard = styled.div`
  background-color: #444;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`;

const ProjectDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: translateY(0);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ViewButton = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Mywork = () => {
  const projects = [
    {
      title: 'Chirag-web',
      image: 'src/assets/Desktop - 1.png',
      url: 'chirag-website.vercel.app', // Replace with the actual URL
    },
    {
      title: 'Select Ease-web',
      image: 'src/assets/Hero Section.png',
      url: 'select-ease.vercel.app', // Replace with the actual URL
    },
    {
      title: 'Edulley-web',
      image: 'src/assets/edulley.png',
      url: 'https://edulley.com/', // Replace with the actual URL
    },
    {
      title: 'Jagruk Janta-New',
      image: 'src/assets/jagruk janta.png',
      url: 'https://jagrukjanta.net/', // Replace with the actual URL
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
              <ViewButton href={project.url} target="_blank">
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