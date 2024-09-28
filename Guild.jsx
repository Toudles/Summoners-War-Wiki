import React, { useState } from 'react';
import './index.css';
import SWSiege from './assets/SWSiege.png';
import Carcano from './assets/Carcano.png';
import Orion from './assets/Orion.png';
import Triana from './assets/Triana.png';
import Tractor from './assets/Tractor.png';
import Clara from './assets/Clara.png';
import Seara from './assets/Seara.png';
import Perna from './assets/Perna.png';
import FengYan from './assets/FengYan.png';
import Nana from './assets/Nana.png';
import Chandra from './assets/Chandra.png';
import Vigor from './assets/Vigor.png';
import GuildBattle from './assets/GuildBattle.png';
import WorldGuild from './assets/WorldGuild.png';
import Tartarus from './assets/Tarturus.png';
import Subjugation from './assets/MonsterSubjugation.png';

function Guild() {
    const [expandedSection, setExpandedSection] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);
    const [selectedMonster, setSelectedMonster] = useState(null);

    const handleSectionClick = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
        setSelectedContent(null);
        setSelectedMonster(null);
    };

    const handleContentClick = (content, event) => {
        event.stopPropagation();
        setSelectedContent(content);
        setSelectedMonster(null);
    };

    const handleMonsterClick = (monster) => {
        console.log(`Monster clicked: ${monster}`);
        setSelectedMonster(monster);
    };

    const handleClosePopup = () => {
        setSelectedContent(null);
        setSelectedMonster(null);
    };

    return (
        <div className="guild-page">
            {/* Banner */}
            <div className="banner">
                <h1>Interested in PvP or PvE Guild Content?</h1>
            </div>

            {/* PvE and PvP Sections */}
            <div className={`content-container ${selectedContent ? 'shrink' : ''}`}>
                <div
                    className={`content-section pve-section ${expandedSection === 'pve' ? 'expanded' : ''}`}
                    onClick={() => handleSectionClick('pve')}
                >
                    <h2>PvE</h2>
                    {expandedSection === 'pve' && !selectedContent && (
                        <div className="expanded-content">
                            <p>All PvE related content...</p>
                            <ul>
                                <li onClick={(event) => handleContentClick('Monster Subjugation', event)}>Monster Subjugation</li>
                                <li onClick={(event) => handleContentClick('Tartarus Labyrinth', event)}>Tartarus Labyrinth</li>
                                {/* Add more PvE content as needed */}
                            </ul>
                        </div>
                    )}
                </div>
                <div
                    className={`content-section pvp-section ${expandedSection === 'pvp' ? 'expanded' : ''}`}
                    onClick={() => handleSectionClick('pvp')}
                >
                    <h2>PvP</h2>
                    {expandedSection === 'pvp' && !selectedContent && (
                        <div className="expanded-content">
                            <p>All PvP related content...</p>
                            <ul>
                                <li onClick={(event) => handleContentClick('Siege War', event)}>Siege War</li>
                                <li onClick={(event) => handleContentClick('Guild Battle', event)}>Guild Battle</li>
                                <li onClick={(event) => handleContentClick('World Guild Battle', event)}>World Guild Battle</li>
                                {/* Add more PvP content as needed */}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Popup Content for Selected Content */}
            {selectedContent && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClosePopup}>X</button>
                        <h3>{selectedContent}</h3>
                        {selectedContent === 'Siege War' && (
                            <div>
                                <img src={SWSiege} alt="Siege War" className="content-image" />
                                <section>
                                    <h4>What is Siege War?</h4>
                                    <p>Siege War is a PvP guild content where guilds compete to conquer territories in 12-hour intervals with a break in between halves.</p>
                                </section>
                                <section>
                                    <h4>What monsters are good in defense/offense?</h4>
                                    <p>Some of the most common F2P monsters consist of:</p>
                                    <div className="monster-icons">
                                        <img src={Carcano} alt="Carcano" onClick={() => handleMonsterClick('Carcano')} />
                                        <img src={Orion} alt="Orion" onClick={() => handleMonsterClick('Orion')} />
                                        <img src={Triana} alt="Triana" onClick={() => handleMonsterClick('Triana')} />
                                        <img src={Tractor} alt="Tractor" onClick={() => handleMonsterClick('Tractor')} />
                                        <img src={Clara} alt="Clara" onClick={() => handleMonsterClick('Clara')} />
                                    </div>
                                    <p>Some of the most common P2W monsters consist of:</p>
                                    <div className="monster-icons">
                                        <img src={Seara} alt="Seara" onClick={() => handleMonsterClick('Seara')} />
                                        <img src={Perna} alt="Perna" onClick={() => handleMonsterClick('Perna')} />
                                        <img src={FengYan} alt="FengYan" onClick={() => handleMonsterClick('FengYan')} />
                                        <img src={Nana} alt="Nana" onClick={() => handleMonsterClick('Nana')} />
                                        <img src={Chandra} alt="Chandra" onClick={() => handleMonsterClick('Chandra')} />
                                    </div>
                                    <p>Some of the most common teams consist of:</p>
                                    <div className="monster-icons">
                                        <img src={Seara} alt="Seara" onClick={() => handleMonsterClick('Seara')} />
                                        <img src={Perna} alt="Perna" onClick={() => handleMonsterClick('Perna')} />
                                        <img src={Orion} alt="Orion" onClick={() => handleMonsterClick('Orion')} />
                                        <p> </p>
                                        <img src={Carcano} alt="Carcano" onClick={() => handleMonsterClick('Carcano')} />
                                        <img src={Triana} alt="Triana" onClick={() => handleMonsterClick('Triana')} />
                                        <img src={Vigor} alt="Vigor" onClick={() => handleMonsterClick('Vigor')} />
                                    </div>
                                </section>
                                <section>
                                    <h4>How should you go about attacking in war?</h4>
                                    <p>It's always nice to have a fun cheese team that has a high win rate but also to make sure your team has a healer with a tank for the enemy's main damage dealer.</p>
                                    <p>Before attacking, make sure to figure out whether you want to do a speed battle or let the enemy take first moves and tank their attacks before doing your attacks.</p>
                                </section>
                            </div>
                        )}
                        {selectedContent === 'Guild Battle' && (
                            <div>
                                <img src={GuildBattle} alt="Guild Battle" className="content-image" />
                                <section>
                                    <h4>What is Guild Battle?</h4>
                                    <p>Guild Battle used to be an everyday fight between 2 guilds where each player gets 2 attacks. This was changed to world guild battle where Guild Battle now is just a battle between npc guilds where it is very easy fights for easy and free Guild Points.</p>
                                </section>
                            </div>
                        )}
                        {selectedContent === 'World Guild Battle' && (
                            <div>
                                <img src={WorldGuild} alt="World Guild Battle" className="content-image" />
                                <section>
                                    <h4>What is World Guild Battle?</h4>
                                    <p>World Guild Battle is the new and improved Guild Battle system where 2 guilds battle it out to see who can earn more destruction %. Each member has 2 opportunities to get 5 wins against 2 different opponents in a 3v3 match where there are no limitations on 4* or 5* only like Siege War.</p>
                                </section>
                            </div>
                        )}
                        {selectedContent === "Tartarus Labyrinth" && (
                            <div>
                                <img src={Tartarus} alt="Tarturus Labyrinth" className="content-image" />
                                <section>
                                    <h4>What is Tartarus Labyrinth?</h4>
                                    <p>Tartarus Labyrinth is a PvE Guild Content where you and your guild members work to discover the depths of Tartarus' Labyrinth. The higher the difficulty of rooms you complete, the faster the completion you get to unlocking more rooms. You can either clear as many rooms as it takes to find Tartarus and defeat him within a set time period or find the 3 other sub-bosses, defeat them to unlock Tartarus' room. The faster you beat Tartarus, the better the rewards.</p>
                                </section>
                            </div>
                        )}
                        {selectedContent === 'Monster Subjugation' && (
                            <div>
                                <img src={Subjugation} alt="Monster Subjugation" className="content-image" />
                                <section>
                                    <h4>What is Monster Subjugation??</h4>
                                    <p>Monster Subjugation is a PvE Guild Content where you fight waves of enemies consisting of a wind type battle, water type battle, and a fire type battle where you try to get to the highest wave level possible for more rewards. After, you will be able to fight the "main boss" which is either a wind/fire/water king slime.</p>
                                </section>
                            </div>
                        )}
                        {/* Add more conditions for other content as needed */}
                    </div>
                </div>
            )}

            {/* Monster Info Popup */}
            {selectedMonster && (
                <div className="monster-popup-overlay" onClick={handleClosePopup}>
                    <div className="monster-popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClosePopup}>X</button>
                        <h4>{selectedMonster}</h4>
                        <p>{`Details about ${selectedMonster} and its skills.`}</p>
                        {/* You can expand the details here based on the monster */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Guild;
