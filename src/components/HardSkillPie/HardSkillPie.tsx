import * as React from 'react';
import { Pie } from 'ant-design-pro/lib/Charts';
import './HardSkillPie.css';

type ExpertLevel = 1 | 2 | 3 | 4;

export interface HardSkillPieProps {
  imageUrl: string;
  title?: string;
  height: number;
  level: ExpertLevel;
  skillSubTitle?: string;
}

export function HardSkillPie({
  height = 100,
  imageUrl,
  title,
  level,
  skillSubTitle
}: HardSkillPieProps) {
  const levelMap: { [key: number]: number } = { 1: 25, 2: 50, 3: 75, 4: 100 };
  const skillMap: { [key: number]: string } = {
    1: 'novice',
    2: 'intermediate',
    3: 'advanced',
    4: 'expert'
  };
  return (
    <div className="HardSkillPie">
      <div>
        <img src={imageUrl} alt="image" />
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <Pie
          percent={levelMap[level]}
          subTitle={<p>{skillSubTitle}</p>}
          total={skillMap[level]}
          height={height}
        />
      </div>
    </div>
  );
}
