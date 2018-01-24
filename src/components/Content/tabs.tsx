import * as React from 'react';
import './tabs.css';

export interface RolesProps {}

export function Roles(props: RolesProps) {
  return (
    <ul className="_tabs">
      <li>
        Senior Frontend Engineer: take full ownership of projects, from napkin scribble to MVP
      </li>
      <li>
        Team leader, always leading by example; fond of "embrace any challenge" attitude and
        defenestrator of blame culture
      </li>
      <li>Software Architecture, Tech Stack procurement (what to build, implement or buy)</li>
      <li>
        A link between Frontend, Backend or DevOps teams, to implement APIs and Services harmoniously
      </li>
      <li>Researcher of feasible and performant technological solutions to drive innovation</li>
    </ul>
  );
}

export function Responsabilities(props: RolesProps) {
  return (
    <ul className="_tabs">
      <li>
        Write clean, modular, extensible and testable code implementing the best breed of
        technologies. Promoter of best practices within team
      </li>
      <li>Transform wireframes/mockups into interactive engaging experiences </li>
      <li>Researcher of feasible and performant technological solutions to drive innovation</li>
      <li>Getting involved in all phases of SDLC</li>
      <li>Crafting comprehensive application testing code</li>
      <li>Revamp existing app code to meet current security and functionality best practices</li>
      <li>Implement testing tools that monitor the ongoing performance of production apps</li>
      <li>Ensure that apps renders well across the multiple devices that company supports</li>
      <li>Develop code focused on the context of the business, foresee company scaling needs</li>
      <li>Monitor apps performance and analytics to spot issues</li>
      <li>Write/support of documentation of any new piece of code</li>
    </ul>
  );
}
