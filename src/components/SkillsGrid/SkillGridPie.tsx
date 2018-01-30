import * as React from 'react';
import { HardSkillPie, ExpertLevel } from '../HardSkillPie/HardSkillPie';
import './SkillGridPie.css';

export interface SkillLanguage {
  name: string;
  years: number;
  level: number;
  image: string;
}

export interface SkillGridPieProps {
  title: string;
  skillSet: Array<SkillLanguage>;
}

export function SkillGridPie(props: SkillGridPieProps) {
  const skills = props.skillSet;

  return (
    <div>
      <h3 style={{ fontWeight: 'bold' }}>{props.title}</h3>
      <div className="SkillGrid">
        {skills.map((skill: SkillLanguage) => (
          <HardSkillPie
            key={skill.name}
            height={60}
            imageUrl={`assets/images/${skill.image}.svg`}
            title={skill.name}
            level={Math.floor(skill.level / 25) as ExpertLevel}
          />
        ))}
      </div>
    </div>
  );
}
