import * as React from 'react';
import './Layout.css';

import Header from '../../components/Header/Header';
import Timeline from '../../components/Timeline/Timeline';
import { Content } from '../../components/Content/Content';
// import { HardSkillPie } from '../../components/HardSkillPie/HardSkillPie';
import { SkillGridPie } from '../../components/SkillsGrid/SkillGridPie';
// @ts-ignore
import * as backend from '../../components/SkillsGrid/skill-models/back-end.json';
// @ts-ignore
import * as frontEndFrameworks from '../../components/SkillsGrid/skill-models/front-end.json';
import { SkillGridLine } from '../../components/SkillsGrid/SkillGridLine';

export interface LayoutProps {}

export default class Layout extends React.Component<LayoutProps, object> {
  render() {
    console.log(backend.data.languages);
    return (
      <div className="Layout">
        <Header />
        <Timeline>Timeline</Timeline>
        <div className="content">
          <Content />
        </div>
        <div className="skills">
        <SkillGridPie title="Backend Languages" skillSet={backend.data.languages}   />
        <SkillGridLine title="Backend Frameworks" skillSet={backend.data.frameworks}   />
        <SkillGridPie title="Server-Less" skillSet={backend.data['server-less']}   />

        </div>
      </div>
    );
  }
}
