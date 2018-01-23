import * as React from 'react';
import { Timeline, Icon } from 'antd';
import './Timeline.css';

export interface TimelineProps {}

export default function timeline(props: TimelineProps) {
  return (
    <div className="Timeline _Timeline">
      <h3>Work</h3>
      <h4>8+ years, the evolution of my Tech Stack</h4>
      <Timeline>
        <Timeline.Item dot={<Icon type="loading" style={{ fontSize: '16px' }} />}>
          <h3>2017-->Today:</h3>
          <ul>
            <li>Angular-Ecosystem: NgRx, Material, Universal, PWA</li>
            <li>React-Ecosystem: Router, Redux, Css modules</li>
            <li>Backend: Serverless(AWS Lambda, Google Firebase) | NodeJS</li>
            <li>Mobile: Nativescript | React Native | Ionic</li>
            <li>NLP Chatbots</li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>
          <h3>2015-->2017:</h3>
          <ul>
            <li>Frontend: Angular.js | Angular | React | jQuery | Bootstrap</li>
            <li>Backend: Almost exclusively NodeJS</li>
            <li>Mobile: Ionic</li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>
          <h3>2013-->2015:</h3>
          <ul>
            <li>Frontend: jQuery| d3.js | ExtJS | Bootstrap</li>
            <li>Backend: Rubi (RoR), PHP(Laravel | Symfony), Java(Spring)</li>
            <li>Mobile: Ionic | PhoneGap</li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>
          <h3>2009-->2013:</h3>
          <ul>
            <li>Frontend: VanillaJS | jQuery</li>
            <li>Backend: PHP | Java</li>
          </ul>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
