import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const SkillsSection = styled.section`
  background-color: black;
  color: white;
  padding: 80px 20px;
  text-align: center;
  margin: 40px 0;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  opacity: 0; /* Initially hidden */
  animation: ${fadeIn} 1s ease-out forwards; /* Fade-in animation */
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 120px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; /* Added transform transition */

  &:hover {
    transform: translateY(-5px) scale(1.05); /* Added scale on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const skills = [
  { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' }
];

const Skills = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Trigger the fade-in animation
    if (titleRef.current) {
      titleRef.current.style.animationPlayState = 'running';
    }
  }, []);

  return (
    <SkillsSection id="skills">
      <SkillsTitle ref={titleRef}>Skills</SkillsTitle>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Card key={index}>
            <Icon src={skill.icon} alt={skill.name} />
            {skill.name}
          </Card>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;