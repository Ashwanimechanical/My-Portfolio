import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const ContactContainer = styled.section`
  background-color: rgba(5, 5, 5, 0.94);
  color: white;
  padding: 2rem 1rem; /* Adjusted padding for mobile */
  display: flex;
  flex-direction: column; /* Stack elements on mobile */
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    /* Styles for larger screens */
    flex-direction: row; /* Restore row layout */
    padding: 4rem 3rem;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  max-width: 100%; /* Full width on mobile */
  padding-right: 0; /* Remove right padding on mobile */
  margin-bottom: 2rem; /* Add bottom margin for spacing */

  @media (min-width: 768px) {
    /* Styles for larger screens */
    max-width: 500px; /* Restore max-width */
    padding-right: 2rem; /* Restore right padding */
    margin-bottom: 0;
  }
`;

const ContactForm = styled.div`
  flex: 1;
  max-width: 100%; /* Full width on mobile */
  padding-left: 0; /* Remove left padding on mobile */

  @media (min-width: 768px) {
    /* Styles for larger screens */
    max-width: 500px; /* Restore max-width */
    padding-left: 2rem; /* Restore left padding */
  }
`;

const Heading = styled.h2`
  font-size: 2rem; /* Adjusted font size for mobile */
  margin-bottom: 1.5rem; /* Adjusted margin for mobile */
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    /* Styles for larger screens */
    font-size: 2.5rem; /* Restore font size */
    margin-bottom: 2rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.5rem; /* Adjusted font size for mobile */
  margin-bottom: 1rem;
  color: #FFA500;

  @media (min-width: 768px) {
    /* Styles for larger screens */
    font-size: 1.9rem; /* Restore font size */
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem; /* Adjusted margin for mobile */
  margin-bottom: 1rem; /* Adjusted margin for mobile */

  @media (min-width: 768px) {
    /* Styles for larger screens */
    margin-top: 1.7rem; /* Restore margin */
  }
`;

const DetailIcon = styled.div`
  margin-right: 0.8rem; /* Adjusted margin for mobile */
  color: #007bff;
  font-size: 1.1rem; /* Adjusted icon size for mobile */

  @media (min-width: 768px) {
    /* Styles for larger screens */
    margin-right: 1rem; /* Restore margin */
    font-size: 1.2rem; /* Restore icon size */
  }
`;

const DetailText = styled.span`
  font-size: 1rem; /* Adjusted font size for mobile */

  @media (min-width: 768px) {
    /* Styles for larger screens */
    font-size: 1.1rem; /* Restore font size */
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.4rem; /* Adjusted margin for mobile */
  font-size: 1rem; /* Adjusted font size for mobile */

  @media (min-width: 768px) {
    /* Styles for larger screens */
    margin-bottom: 0.5rem; /* Restore margin */
    font-size: 1.1rem; /* Restore font size */
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.6rem; /* Adjusted padding for mobile */
  margin-bottom: 0.8rem; /* Adjusted margin for mobile */
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: white;

  @media (min-width: 768px) {
    /* Styles for larger screens */
    padding: 0.75rem; /* Restore padding */
    margin-bottom: 1rem; /* Restore margin */
  }
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem; /* Adjusted padding for mobile */
  margin-bottom: 0.8rem; /* Adjusted margin for mobile */
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: white;
  resize: vertical;

  @media (min-width: 768px) {
    /* Styles for larger screens */
    padding: 0.75rem; /* Restore padding */
    margin-bottom: 1rem; /* Restore margin */
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.6rem 1.2rem; /* Adjusted padding for mobile */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:#552288;
  }

  @media (min-width: 768px) {
    /* Styles for larger screens */
    padding: 0.75rem 1.5rem; /* Restore padding */
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact"> 
      <ContactDetails>
        <Heading>Let's talk</Heading>
        <p>
          I'm currently available to take on new projects, so feel free to send me
          a message about anything that you want me to work on. You can contact
          anytime.
        </p>
        <DetailItem>
          <DetailIcon>
            <FaEnvelope />
          </DetailIcon>
          <DetailText>ashwani.codee@gmail.com</DetailText>
        </DetailItem>
        <DetailItem>
          <DetailIcon>
            <FaPhone />
          </DetailIcon>
          <DetailText>+918433177868</DetailText>
        </DetailItem>
        <DetailItem>
          <DetailIcon>
            <FaMapMarkerAlt />
          </DetailIcon>
          <DetailText>Rudrapur, Uttarakhand</DetailText>
        </DetailItem>
      </ContactDetails>
      <ContactForm>
      <Heading>Get in touch</Heading>
      <FormLabel htmlFor="name">Your Name</FormLabel>
      <FormInput type="text" id="name" placeholder="Enter your name" />
      <FormLabel htmlFor="email">Your Email</FormLabel>
      <FormInput type="email" id="email" placeholder="Enter your email" />
      <FormLabel htmlFor="message">Write your message here</FormLabel>
      <FormTextArea id="message" rows="5" placeholder="Enter your message" />
      <SubmitButton>Submit</SubmitButton>
    </ContactForm>
    </ContactContainer>
  );
};

export default Contact;