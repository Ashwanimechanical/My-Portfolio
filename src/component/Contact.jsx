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
  align-items: center;

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

export default function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    
    formData.append("access_key", "fd787b3b-072c-4968-b3e3-0191433047bb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error submitting form:", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error submitting form:", error);
      setResult("Network error. Please check your connection.");
    }
  };

  return (
    // Main container for the contact section
    <section id="contact" className="bg-gray-900 text-white py-8 px-4 md:py-16 md:px-12 flex flex-col items-center justify-center font-inter rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row max-w-6xl w-full">
        {/* Contact Details Section */}
        <div className="flex-1 md:pr-8 mb-8 md:mb-0 max-w-full md:max-w-[500px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-white">Let's talk</h2>
          <p className="text-lg mb-6 text-gray-300">
            I'm currently available to take on new projects, so feel free to send me
            a message about anything that you want me to work on. You can contact
            anytime.
          </p>
          {/* Email Detail Item */}
          <div className="flex items-center mt-4 mb-4">
            <div className="mr-3 text-blue-500 text-xl">
              {/* Inline SVG for Envelope icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23.4s-18.9 7-28.8 4.7L192 420.4 18.8 472.9c-9 2.5-18.7-1.4-24.6-9s-7-18.2-1.9-27.8l93.5-165.3L61.7 206.4c-9.1-17-4.4-37.5 11.2-47.4s36.4-12.7 53.5-1.9L498.1 5.6zM352 352.9V288c0-10.7 13-16.1 20.5-8.5l98.5 98.5c11.7 11.7 3.3 31.7-13.3 31.7H109.9L352 352.9z"/>
              </svg>
            </div>
            <span className="text-lg text-gray-200">ashwani.codee@gmail.com</span>
          </div>
          {/* Phone Detail Item */}
          <div className="flex items-center mt-4 mb-4">
            <div className="mr-3 text-blue-500 text-xl">
              {/* Inline SVG for Phone icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
                <path d="M164.9 24.6c-7.7-18.6-28-28.7-47.8-24.9L48.8 9.2c-17.7-3.4-35.8 3.5-47.8 19.3S-5.3 54.4 3.4 70.8L106.6 270.5c15.2 28.1 27.5 50.7 44.5 72c20.3 26.6 40.8 51.5 61.2 76.8c11.6 13.8 24.2 27.5 37.5 39.5c11.7 10.7 23.3 21 34.9 31.6c4.5 4 9 8 13.6 11.8c7.8 6.5 17.5 10.8 28 12.8s21.9 .4 32.7-5.5l9.6-5.5c22.1-12.7 36.3-36.9 36.3-62.7c0-29.6-20.2-54.3-48.4-60.8l-123.6-28.1c-17.6-4-35.1 4-42.9 20.6s-8.1 36.2-.2 52.3c33.3 64.9 76 120.3 126.9 164.1c16.3 14.1 35.8 22.3 56.4 22.3h.2c16.6 0 32.9-6.3 45.1-17.5l5.9-5.4c17.9-16.4 28.5-38.6 28.5-62.8c0-25.2-11.4-48.4-30.8-64.8l-205.6-205.6zm297.8 81.3L459 29.5C470.9 9.8 488.5 0 507.2 0c18.5 0 35.3 9.4 45.2 27.5L507.2 29.5z"/>
              </svg>
            </div>
            <span className="text-lg text-gray-200">+918433177868</span>
          </div>
          {/* Location Detail Item */}
          <div className="flex items-center mt-4 mb-4">
            <div className="mr-3 text-blue-500 text-xl">
              {/* Inline SVG for Map Marker icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
            </div>
            <span className="text-lg text-gray-200">Rudrapur, Uttarakhand</span>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 md:pl-8 max-w-full md:max-w-[500px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-white">Get in touch</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-200 mb-1">Write your message here</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                required
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 resize-y focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Submit Form
            </button>
            {/* Result Message */}
            <span className="block mt-4 text-center text-lg font-medium text-blue-300">{result}</span>
          </form>
        </div>
      </div>
    </section>
  );
}