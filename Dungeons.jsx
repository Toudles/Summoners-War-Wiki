import React, { useState } from 'react';
import './index.css'; // Ensure you have appropriate styles in this file
import SWAbyss from './assets/SWAbyss.png';
import GiantsF2P from './assets/GiantsF2P.png';
import GiantsF2PSpeed from './assets/GiantsF2PSpeed.png';
import GiantsP2W from './assets/GiantsP2W.png';
import Necro from './assets/Necro.png';
import DragonP2W from './assets/DragP2W.png';
import DragonF2P from './assets/DragF2P.png';
import Spiritual from './assets/Spiritual.png';

function Dungeons() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDungeon, setSelectedDungeon] = useState("");

  const handleLinkClick = (dungeonName) => {
    setSelectedDungeon(dungeonName);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedDungeon("");
  };

  const renderDungeonContent = () => {
    switch (selectedDungeon) {
        case 'Giants Abyss Hard F2P Team':
            return (
            <div>
                <h3>Giants Abyss Hard F2P Team</h3>
                <img src={GiantsF2P} />
                <p>This is a stable F2P team that prioritizes success rate over speed.</p>
                <p> Turn order: Shannon - Roid -  Veromos - Akhamamir - Lyn</p>
                <p> You want to put Shannon on despair + focus and have her speed set at around 240 before speed lead. You want Roid on energy/focus/blade to get a mix of damage and boss debuff to ensure that the boss does minimal damage to you. For Veromos, Lyn and Akhamamir, you want to put them on as much damage as you can with a rage broken set prioritizing crit rate/attack. </p>
                {/* Add more content here as needed */}
            </div>
            );
        case 'Giants Abyss Hard F2P Speed Team':
            return (
              <div>
                <h3>Giants Abyss Hard F2P Team</h3>
                <img src={GiantsF2PSpeed} />
                <p>This is a somewhat stable F2P speed team that prioritizes getting your runs to around 30-40 seconds.</p>
                <p> Turn order: Galleon - Hellea - Veromos - Akhamamir - Lyn</p>
                <p> Similar to Shannon, you want to put Galleon on as much speed and accuracy as you can and also put Hellea on fight runes as well to inflict not only good damage, but branding debuff on the boss to let your other 3 characters do insane damage.</p>
                {/* Add more content here as needed */}
              </div>
            );
        case 'Giants Abyss Hard P2W Speed Team':
            return (
                <div>
                    <h3>Giants Abyss Hard P2W Speed Team</h3>
                    <img src={GiantsP2W} />
                    <p>This is a very strong and fast speed comp that has a very high success rate and averages 23-27 seconds. The only time it would fail is if Teshar or Homonculus AI decides to do something stupid. </p>
                    <p>Turn order: Prilea - Teshar - Konamiya -  Homonculus - Deborah</p>
                    <p>You should stack a lot of fight runes onto Konamiya, Deborah and Prilea while stacking as much atk% and crit% as possible.</p> 
                </div>
            )
        case 'Dragons Abyss Hard F2P Team':
            return (
            <div>
                <h3>Dragons Abyss Hard F2P Team</h3>
                <img src={DragonF2P} />
                <p>This is the F2P version of the P2W team where we replace the water Weapon Master, Liam, with a more free to play friendly unit, Omar.</p>
                <p> Turn order: Shaina - Julie - Kyle - Konomiya - Omar</p>
                <p> Keep the speeds the same as the P2W team, while putting omar on a double focus broken set at 157-160 speed.</p>
                {/* Add more content here as needed */}
            </div>
            );
        case 'Dragons Abyss Hard P2W Team':
            return (
            <div>
                <h3>Dragons Abyss Hard P2W Team</h3>
                <img src={DragonP2W} />
                <p>This is a fast and reliable Dragons Abyss comp that utilizes the water Poison Master and Water Weapon Master to deal massive damage to both mini boss and final boss.</p>
                <p> Turn Order: Shaina - Julie - Kyle - Konomiya - Liam</p>
                <p>The Dragons team is probably the hardest team to build because we need to have very specific runes/speed.</p>
                <p> For Shaina, we have her on triple fight at 225 speed, Julie on a full damage build, blade + rage, with around 190-200 speed, Kyle also on a full damage build at 166 speed, very specific, Konomiya on triple fight as well with 164 speed, and finally, Liam on a broken build with one fight set at 155 speed focusing on full damage.</p> 
                {/* Add more content here as needed */}
            </div>
            );
        case 'Necropolis Abyss Hard F2P Team':
            return (
            <div>
                <h3>Necropolis Abyss Hard F2P Team</h3>
                <img src={Necro} />
                <p>There is no need for a P2W or a safe F2P team as this team is both fast and reliable scoring times up to under 1 minute.</p>
                <p> Turn order: Un/Awakened Cannon Girl - Raoq - Icaru - Astar - Shahman</p>
                <p> You want to put your Cannon Girl on high accuracy to proc defense breaks while also putting Icaru on high defense to maximize the amount of units that attack with Team Up. Put Astar, Shahman and Raoq on high attack, making sure Astar is the highest so that she gets taken in the boss fight and you can easily free her.</p>
                {/* Add more content here as needed */}
            </div>
            );
        case 'Spiritual Realm Abyss Hard F2P Team':
        return (
            <div>
                <h3>Spiritual Realm Abyss Hard F2P Team</h3>
                <img src={Spiritual} />
                <p>There is no need for a P2W or a safe F2P team as this team is both fast and reliable scoring times up to under 1 minute.</p>
                <p> Turn order: Sieq - Loren - Astar - Raoq - Verdehile</p>
                <p> You want to have Verdhile on a broken build ensuring that you have 100% crit rate to proc his passive 160 speed. Raoq should be on a full damage build as well. Can do rune combinatinos of shield, blade, and focus. For Sieq, you should put him on a swift set with around 240 speed to ensure he gets his S3 off to buff other units. For Loren, make sure you have her on double fight with high accuracy and hp to tank and proc defense breaks and around 245 speed. For Astar, have her at around 175 speed and as much damage as you can.</p>
                {/* Add more content here as needed */}
            </div>
            );
      // Add more cases for each link
      default:
        return null;
    }
  };

  return (
    <div className="dungeons-page">
      {/* Top Middle Image */}
      <img src={SWAbyss} alt="Dungeons Abyss" className="dungeons-image" />

      {/* Hyperlink Sections */}
      <div className="links-container">
        {/* Blue Links */}
        <div className="links-section blue-links">
          <a href="#!" onClick={() => handleLinkClick('Giants Abyss Hard F2P Team')}>Giants Abyss Hard F2P Team</a>
          <a href="#!" onClick={() => handleLinkClick('Giants Abyss Hard F2P Speed Team')}>Giants Abyss Hard F2P Speed Team</a>
          <a href="#!" onClick={() => handleLinkClick('Giants Abyss Hard P2W Speed Team')}>Giants Abyss Hard P2W Speed Team</a>
        </div>

        {/* Red Links */}
        <div className="links-section red-links">
          <a href="#!" onClick={() => handleLinkClick('Dragons Abyss Hard F2P Team')}>Dragons Abyss Hard F2P Team</a>
          <a href="#!" onClick={() => handleLinkClick('Dragons Abyss Hard P2W Team')}>Dragons Abyss Hard P2W Team</a>
        </div>

        {/* Purple Links */}
        <div className="links-section purple-links">
          <a href="#!" onClick={() => handleLinkClick('Necropolis Abyss Hard F2P Team')}>Necropolis Abyss Hard F2P Safe/Speed Team</a>
        </div>

        {/* Orange Links */}
        <div className="links-section orange-links">
          <a href="#!" onClick={() => handleLinkClick('Spiritual Realm Abyss Hard F2P Team')}>Spiritual Realm Abyss Hard F2P Team</a>
        </div>
      </div>

      {/* Inline Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>Close</button>
            {renderDungeonContent()}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dungeons;
