import React, { useState } from 'react';
import NavBar from './NavBar';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');


  const HomePage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
        return <Projects />;
      }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {HomePage()}
    </div>
  );
}



