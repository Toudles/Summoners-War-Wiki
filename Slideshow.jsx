import React, { useState } from 'react';
import './index.css'; // Create this CSS file for styling
import SWHomepage from './assets/SWHomepage.png'; 
import RiftRaid from './assets/RiftRaid.png';
import Arena from './assets/Arena.png';
import Dungeons from './assets/Dungeons.png';
import Guild from './assets/Guild.png';

function Slideshow() {
  const slides = [
    {
      image: SWHomepage,
      alt: 'SW Homepage',
      link: '/',
      description: 'Welcome to the homepage. Explore everything SW has to offer.',
    },
    {
      image: Dungeons,
      alt: 'Dungeons',
      link: "/Dungeons",
      description: 'Dive into the Dungeons for endless adventures.',
    },
    {
      image: Arena,
      alt: 'Arena',
      link: "/Arena",
      description: 'Compete in the Arenas and prove your skills.',
    },
    {
      image: Guild,
      alt: 'Guild Content',
      link: "/Guild",
      description: 'Join your guildmates in epic guild content.',
    },
    {
      image: RiftRaid,
      alt: 'Rift Raid',
      link: "/RiftRaids",
      description: 'Challenge the Rift Raid and earn great rewards.',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow">
      <button className="prev-slide" onClick={handlePrevSlide}>
        &#10094;
      </button>
      
      <div className="slide">
        <a href={slides[currentIndex].link}>
          <img src={slides[currentIndex].image} alt={slides[currentIndex].alt} className="slide-image" />
        </a>
        <div className="slide-description">
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
      
      <button className="next-slide" onClick={handleNextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Slideshow;
