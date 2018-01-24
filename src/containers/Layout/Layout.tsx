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
          <HardSkillPie
            imageUrl={process.env.PUBLIC_URL + 'assets/images/github.svg'}
            level={1}
            title="github"
            height={50}
          />
          <HardSkillPie
            imageUrl={process.env.PUBLIC_URL + 'assets/images/github.svg'}
            level={1}
            height={50}
          />
        </div>
      </div>
    );
  }
}
