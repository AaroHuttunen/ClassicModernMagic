import React from 'react';
import './Lists.css';

const BannedCards = () => {
    const bannedCards = [
        'Ancestral Vision',
        'Ancient Den',
        'Blazing Shoal',
        'Chrome Mox',
        'Cloudpost',
        'Dark Depths',
        'Deathrite Shaman',
        'Dread Return',
        'Gitaxian Probe',
        'Glimpse of Nature',
        'Golgari Grave-Troll',
        'Great Furnace',
        'Green Sun\'s Zenith',
        'Hypergenesis',
        'Jace, the Mind Sculptor',
        'Mental Misstep',
        'Ponder',
        'Preordain',
        'Punishing Fire',
        'Rite of Flame',
        'Seat of the Synod',
        'Second Sunrise',
        'Seething Song',
        'Sensei\'s Divining Top',
        'Skullclamp',
        'Stoneforge Mystic',
        'Sword of the Meek',
        'Tree of Tales',
        'Umezawa\'s Jitte',
        'Vault of Whispers',
    ];

    const bannedList = bannedCards.map(card => <li key={card}>{card}</li>);

    return (
        <section id="banned-cards" className="section">
            <h2>Banned Cards</h2>
            <p>
                The following cards are banned in the Classic Modern format due to their power level and impact on gameplay:
            </p>
            <ul className="banned-grid">
                {bannedList}
            </ul>
        </section>
    );
}
  
  export default BannedCards;