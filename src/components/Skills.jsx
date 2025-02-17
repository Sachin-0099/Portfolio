import React, { useState } from 'react';
import SkillsCard from './SkillsCard';
import skillsData from '../utils/data.json'; // Adjusted path to the utils folder
import './Skills.css';
import SkillsInfoCard from './SkillsInfoCard';

const Skills = () => {
    // Initialize selectedSkill with the first skill category from skillsData
    const [selectedSkill, setSelectedSkill] = useState(
        skillsData.skills?.[0] || {}
    );

    // Update selectedSkill when a skill is clicked
    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <section className="skills-container w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white ">
            <h5 className="text-4xl font-bold inline border-b-4 border-gray-500">Technical Proficiency</h5>
            <div className="skills-content mt-16 ">
                {/* Skills Cards */}
                <div className="skills">
                    {skillsData.skills?.map((item) => (
                        <SkillsCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => handleSelectedSkill(item)}
                        />
                    ))}
                </div>

                {/* Skills Info */}
                <div className="skills-info">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills || []}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
