import React from "react";
import './Lists.css';

const LegalSets = () => {
    const legalSets = [
        'Eighth Edition',
        'Mirrodin',
        'Darksteel',
        'Fifth Dawn',
        'Champions of Kamigawa',
        'Betrayers of Kamigawa',
        'Saviors of Kamigawa',
        'Ninth Edition',
        'Ravnica: City of Guilds',
        'Guildpact',
        'Dissension',
        'Coldsnap',
        'Time Spiral',
        'Planar Chaos',
        'Future Sight',
        'Tenth Edition',
        'Lorwyn',
        'Morningtide',
        'Shadowmoor',
        'Eventide',
        'Shards of Alara',
        'Conflux',
        'Alara Reborn',
        'Magic 2010',
        'Zendikar',
        'Worldwake',
        'Rise of the Eldrazi',
        'Magic 2011',
        'Scars of Mirrodin',
        'Mirrodin Besieged',
        'New Phyrexia',
        'Magic 2012',
        'Innistrad',
        'Dark Ascension',
        'Avacyn Restored',
        'Magic 2013',
        'Return to Ravnica',
        'Gatecrash',
        'Dragon\'s Maze',
        'Magic 2014',
        'Theros',
        'Born of the Gods',
        'Journey into Nyx',
    ];

  const setsList = legalSets.map(set => <li key={set}>{set}</li>);

    return (
        <section id="legal-sets" className="section">
            <h2>Legal Sets:</h2>
            <p>
                All Modern-legal sets from Eighth Edition to Journey into Nyx are legal in the Classic Modern format. This includes the following sets:
            </p>
            <ul className="sets-grid">
                {setsList}
            </ul>
        </section>
    );
}

export default LegalSets;