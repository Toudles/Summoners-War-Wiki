import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 
import TopLeft from './assets/TopLeft.png'; 
import SWLogo from './assets/SWLogo.png'; 
import Wind from './assets/HallofWind.png';
import Dark from './assets/HallofDark.png';
import Water from './assets/HallofWater.png';
import Fire from './assets/HallofFire.png';
import Light from './assets/HallofLight.png';
import Elements from './assets/HallofElements.png';

function Background({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentDungeon, setCurrentDungeon] = useState(null);
  const [currentDungeonName, setCurrentDungeonName] = useState("");
  const [countdown, setCountdown] = useState("");
  const dropdownRef = useRef(null);

  const dungeons = {
    0: { img: Light, name: "Light" },   // Sunday
    1: { img: Dark, name: "Dark" },    // Monday
    2: { img: Fire, name: "Fire" },    // Tuesday
    3: { img: Water, name: "Water" },   // Wednesday
    4: { img: Wind, name: "Wind" },    // Thursday
    5: { img: Elements, name: "All Elements" }, // Friday
    6: { img: Elements, name: "All Elements" }  // Saturday
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const updateDungeonAndTimer = () => {
      const now = new Date();
      const utcOffset = -0; // Eastern Daylight Time (UTC-4)
      
      // Convert UTC time to ET time
      const localTime = new Date(now.getTime() + (utcOffset * 60 * 60 * 1000));
      const day = localTime.getDay(); // Get the current day (0-6)

      // Calculate the next reset time
      let nextReset = new Date(localTime);
      nextReset.setHours(3, 0, 0, 0); // Set to 3 AM ET

      // If the reset time is in the past today, move to the next day
      if (localTime >= nextReset) {
        nextReset.setDate(nextReset.getDate() + 1);
      }

      const timeDifference = nextReset - localTime;

      // Calculate hours, minutes, and seconds remaining
      const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCurrentDungeon(dungeons[day].img);
      setCurrentDungeonName(`Current Dungeon: ${dungeons[day].name}`);
      setCountdown(
        `${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s until reset`
      );
    };

    updateDungeonAndTimer();
    const intervalId = setInterval(updateDungeonAndTimer, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="Background">
      <div className="banner">
        <div className="top-left-logo-container" ref={dropdownRef}>
          <img
            src={TopLeft}
            alt="Triple Bar Tab"
            className="top-left-logo"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/Dungeons" className="dropdown-item">Dungeons</Link>
              <Link to="/Arena" className="dropdown-item">Arena</Link>
              <Link to="/Guild" className="dropdown-item">Guild Content</Link>
              <Link to="/RiftRaids" className="dropdown-item">Rift Raids</Link>
            </div>
          )}
        </div>

        <Link to="/">
          <img src={SWLogo} alt="SW Logo" className="top-middle-logo" />
        </Link>

        <div className="top-right-timer">
          {currentDungeon && (
            <>
              <img src={currentDungeon} alt="Current Dungeon" className="dungeon-icon" />
              <div className="dungeon-name">{currentDungeonName}</div>
            </>
          )}
          <div className="countdown">{countdown}</div>
        </div>
      </div>

      <div className="beige-section">
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Background;
