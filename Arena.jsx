import React, { useState } from 'react';
import './index.css';
import Psmanthe from './assets/Psmanthe.png';
import PsmantheS1 from './assets/PsmantheS1.png';
import PsmantheS2 from './assets/PsmantheS2.png';
import PsmanthePassive from './assets/PsmanthePassive.png';
import PsmantheLeader from './assets/Psmantheleader.png';
import Tiana from './assets/Tiana.png';
import TianaS1 from './assets/TianaS1.png';
import TianaS2 from './assets/TianaS2.png';
import TianaS3 from './assets/TianaS3.png';
import TianaLeader from './assets/TianaLeader.png';
import Galleon from './assets/Galleon.png';
import GalleonS1 from './assets/GalleonS1.png';
import GalleonS2 from './assets/GalleonS2.png';
import GalleonS3 from './assets/GalleonS3.png';
import GalleonLeader from './assets/GalleonLeader.png';
import Kaki from './assets/Kaki.png';
import KakiS1 from './assets/KakiS1.png';
import KakiS2 from './assets/KakiS2.png';
import KakiPassive from './assets/KakiPassive.png';
import Lushen from './assets/Lushen.png';
import LushenS1 from './assets/LushenS1.png';
import LushenS2 from './assets/LushenS2.png';
import LushenS3 from './assets/LushenS3.png';
import LushenLeader from './assets/LushenLeader.png';

function Arena() {
    const [selectedMonster, setSelectedMonster] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const monsters = {
        Psmanthe: {
            image: Psmanthe,
            skills: [
                { name: 'Skill 1', image: PsmantheS1, description: 'Serenity: Attacks the enemy 2 times and increases the chances of the enemy to land a Glancing Hit for 2 turns with a 30% chance on each strike.' },
                { name: 'Skill 2', image: PsmantheS2, description: 'Overwhelm of Water: Attacks all enemies to decrease their Attack Speed for 1 turn and to increase the skill cooldown time by 1 turn each with a 70% chance each. (Reusable in 4 turns)' },
                { name: 'Passive', image: PsmanthePassive, description: 'Rageful Return (Passive): Goes back to the elemental realm at the moment of death and returns with 30% HP. The activation of Rageful Return deals significant damage to all enemies. [Automatic Effect] (Reusable in 9 turns)' },
                { name: 'Leader Skill', image: PsmantheLeader, description: '+33% speed increase in Arena.'},
            ],
        },
        Tiana: {
            image: Tiana, // Update with the correct path
            skills: [
                { name: 'Skill 1', image: TianaS1, description: 'Essence Explosion: Attacks the enemy to inflict damage and weakens the Defense for 2 turns with a 50% chance.' },
                { name: 'Skill 2', image: TianaS2, description: "Storm of Midnight: Attacks to deal damage that increases proportionate to the enemy's Attack Speed. The attack will always land as a Critical Hit if the enemy has no beneficial effects. (Reusable in 3 turns)" },
                { name: 'Skill 3', image: TianaS3, description: "Wind of Changes: Removes all harmful and beneficial effects of all allies and enemies and increases the Attack Bar of all allies by 30%. This effect can't be resisted. (Reusable in 6 turns)" },
                { name: 'Leader Skill', image: TianaLeader, description: 'Increases the Defense of ally monsters in the Arena by 44%.'}
            ],
        },
        Galleon: {
            image: Galleon, // Update with the correct path
            skills: [
                { name: 'Skill 1', image: GalleonS1, description: 'Backspin Slash: Swiftly attacks an enemy and weakens its defense for 1 turn with a 75% chance.' },
                { name: 'Skill 2', image: GalleonS2, description: "Pirate's Strike: Deals a powerful attack to an enemy and absorbs 30% of its Attack Bar. (Reusable in 3 turns)" },
                { name: 'Skill 3', image: GalleonS3, description: 'Time to Loot: Unleashes a battle cry that increases the Attack Power of all allies for 2 turns, and decreases the defense of the enemy for 2 turns with a 75% chance at the same time. (Reusable in 5 turns)' },
                { name: 'Leader Skill', image: GalleonLeader, description: 'Increases the Attack Speed of ally monsters in Guild Content by 24%.'}
            ],
        },
        Kaki: {
            image: Kaki,
            skills: [
                { name: 'Skill 1', image: KakiS1, description: "Ghost Slash: Attacks the enemy 2 times, recovering HP by 30% of the inflicted damage and decreasing the target's Defense for 2 turns with a 20% chance each." },
                { name: 'Skill 2', image: KakiS2, description: 'Blade Slaughter: Attacks all enemies and grants Endure effect on yourself for 1 turn if an enemy gets defeated. (Reusable in 4 turns)' },
                { name: 'Passive', image: KakiPassive, description: 'Forestall (Passive): Increases your Defense by 20% of your Attack Power when the battle begins, and inflicts additional damage proportional to your Defense when you attack on your turn. Critical Hits won’t occur when attacking the enemy. [Automatic Effect]' },
            ],
        },
        Lushen: {
            image: Lushen, // Update with the correct path
            skills: [
                { name: 'Skill 1', image: LushenS1, description: "Flying Cards: Throws a sharp card to attack and disturbs the enemy's HP recovery for 2 turns with a 70% chance." },
                { name: 'Skill 2', image: LushenS2, description: "Surprise Box: Summons a surprise box that inflicts damage and grants 1 random harmful effect among Stun, Glancing Hit Rate Increase, and Attack Speed Decrease to all enemies. (Reusable in 4 turns)" },
                { name: 'Skill 3', image: LushenS3, description: "Amputation Magic: Throws a number of cards and inflicts damage to all enemies, ignoring their Defense. (Reusable in 5 turns)" },
                { name: 'Leader Skill', image: LushenLeader, description: 'Leader Skill: Increases the Attack Power of ally monsters in the Dungeons by 33%.'}
            ],
        },
        // Add more monsters as needed
    };

    const handleMonsterClick = (monster) => {
        setSelectedMonster(monster);
        setSelectedSkill(null); // Reset any selected skill when a new monster is clicked
    };

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    const closePopup = () => {
        setSelectedMonster(null);
        setSelectedSkill(null);
    };

    return (
        <div className="arena-page">
            {/* Description Bubbles */}
            <div className="description-container">
                <div className="description-box">
                    <h2>Arena Gamemode</h2>
                    <p>Arena is a competitive game mode where players fight against each other's defenses to climb the ranks and earn rewards.</p>
                </div>
                <div className="description-box">
                    <h2>Arena Rush</h2>
                    <p>Arena Rush is the final hours before the Arena season ends where players rush to climb the rankings as high as possible to secure better rewards.</p>
                </div>
            </div>

            {/* Monster Box */}
            <div className="monster-container">
                <h2>Commonly Used Monsters in Arena</h2>
                <div className="monster-list">
                    {Object.keys(monsters).map((monster) => (
                        <div className="monster-item" key={monster} onClick={() => handleMonsterClick(monster)}>
                            <img 
                                src={monsters[monster].image}
                                alt={monster} 
                                className="monster-img" 
                            />
                            <p>{monster}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup for Monster Details */}
            {selectedMonster && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={e => e.stopPropagation()}>
                        <h2>{selectedMonster}</h2>
                        <img 
                            src={monsters[selectedMonster].image} 
                            alt={selectedMonster} 
                            className="popup-monster-img"
                        />
                        
                        {/* Mini images representing skills or additional info */}
                        <div className="mini-images">
                            {monsters[selectedMonster].skills.map((skill, index) => (
                                <img 
                                    key={index}
                                    src={skill.image} 
                                    alt={skill.name} 
                                    className="mini-img" 
                                    onClick={() => handleSkillClick(skill)} 
                                />
                            ))}
                        </div>

                        {/* Skill Popup */}
                        {selectedSkill && (
                            <div className="skill-popup">
                                <h3>{selectedSkill.name}</h3>
                                <p>{selectedSkill.description}</p>
                            </div>
                        )}

                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Arena;
