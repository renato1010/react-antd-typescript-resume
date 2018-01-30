import * as React from 'react';
import { Progress } from 'antd';
import './HardSkillLine.css';

export interface HardSkillLineProps {
  percent: number;
  size: 'small' | 'default' | undefined;
  status: 'active' | 'success' | 'exception' | undefined;
  skillName: string;
  imageUrl: string;
}

export function HardSkillLine({
  percent,
  size = 'small',
  status = 'active',
  skillName = '',
  imageUrl
}: HardSkillLineProps) {
  return (
    <div className="HardSkillLine">
      <div className="skill-title">
        <h4 style={{ margin: '0' }}>{skillName}</h4>
      </div>
      {/* <div className="img-container">
        <img src={imageUrl} alt="image" />
      </div> */}
      <div className="skill-line">
        <div style={{ width: '80%' }}>
          <Progress percent={percent} size={size} status={status} />
        </div>
      </div>
    </div>
  );
}
