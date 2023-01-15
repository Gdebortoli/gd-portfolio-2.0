import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
            {/* Git hub link/icon */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" href="https://github.com/Gdebortoli" alt="github-link"/>
            {/* Linked-In link/icon */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" href="https://www.linkedin.com/in/g-debortoli/" alt='Linked-in'/>
            {/* Discord */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" href="Gigi D#4065" alt="discord-username"/>
            </div>

        </footer>
    )

};
// has icon links to the developer’s 
// GitHub and LinkedIn profiles, and their profile on a third platform 
// (Stack Overflow, Twitter) - reference discord chat for icons 

// appears on multiple pages

export default Footer; 