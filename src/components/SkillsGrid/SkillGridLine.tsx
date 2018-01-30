import * as React from 'react';
import { HardSkillLine } from '../HardSkillLine/HardSkillLine';
import './SkillGridLine.css';

export interface SkillLanguage {
  name: string;
  years: number;
  level: number;
  image: string;
}

export interface SkillGridLineProps {
  title: string;
  skillSet: Array<SkillLanguage>;
}

export function SkillGridLine(props: SkillGridLineProps) {
  const skills = props.skillSet;

  return (
    <div>
      <h3 style={{ fontWeight: 'bold' }}>{props.title}</h3>
      <div className="SkillGridLine">
        {skills.map((skill: SkillLanguage) => (
          <HardSkillLine
            key={skill.name}
            size="small"
            status="active"
            percent={skill.level}
            imageUrl={`assets/images/${skill.image}.svg`}
            skillName={skill.name}
          />
        ))}
      </div>
    </div>
  );
}
