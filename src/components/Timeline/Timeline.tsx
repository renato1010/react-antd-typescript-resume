import * as React from 'react';
import { Timeline, Icon } from 'antd';
import './Timeline.css';

export interface TimelineProps {}

export default function timeline(props: TimelineProps) {
  return (
    <div className="Timeline _Timeline">
      <h3 style={{ textAlign: 'center' }}>Work</h3>
      <Timeline>
        <Timeline.Item>
          <h3>2017-->today:</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Angular-Ecosystem: NgRx, Material, Universal, PWA</li>
            <li>React-Ecosystem: Router, Redux, Css modules</li>
            <li>Serverless: AWS Lambda, Google Firebase</li>
            <li>NLP Chatbots</li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item
          dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
          color="red"
        >
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  );
}
