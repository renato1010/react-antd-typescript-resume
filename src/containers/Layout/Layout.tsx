import * as React from 'react';
import './Layout.css';

import Header from '../../components/Header/Header';
import Timeline from '../../components/Timeline/Timeline';

export interface LayoutProps {}

export default class Layout extends React.Component<LayoutProps, object> {
  render() {
    return (
      <div className="Layout">
        <Header />
        <Timeline>Timeline</Timeline>
        <div className="content">content</div>
        <div className="skills">skills</div>
      </div>
    );
  }
}
