import * as React from 'react';
import './Layout.css';

import Header from '../../components/Header/Header';
import Timeline from '../../components/Timeline/Timeline';
import { Content } from '../../components/Content/Content';
import { HardSkillPie } from '../../components/HardSkillPie/HardSkillPie';

export interface LayoutProps {}

export default class Layout extends React.Component<LayoutProps, object> {
  render() {
    return (
      <div className="Layout">
        <Header />
        <Timeline>Timeline</Timeline>
        <div className="content">
          <Content />
        </div>
        <div className="skills">
          <HardSkillPie imageUrl="retro" level={1} height={120}  />
        </div>
      </div>
    );
  }
}
