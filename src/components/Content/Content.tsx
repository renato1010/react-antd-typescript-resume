import * as React from 'react';
import { Card } from 'antd';
import { Roles, Responsabilities } from './tabs';
import { Contact } from './Contact';

const tabList = [
  {
    key: 'Roles',
    tab: 'Roles'
  },
  {
    key: 'Responsabilities',
    tab: 'Responsabilities'
  }
];
const contentList = {
  Roles: Roles({}),
  Responsabilities: Responsabilities({})
};

export interface ContentProps {}

export class Content extends React.Component<
  ContentProps,
  { [key: string]: string | React.ReactNode }
> {
  state = {
    key: 'Roles'
  };
  onTabChange = (key: string, type: string) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }
  render() {
    const _style = { width: '100%', backgroundColor: '#C0D8E528' };
    return (
      <div>
        <Card
          style={_style}
          title="Developer"
          tabList={tabList}
          onTabChange={(key: string) => this.onTabChange(key, 'key')}
        >
          {contentList[this.state.key]}
        </Card>
        <Card style={_style} title="Portfolio">
          <Contact />
        </Card>
      </div>
    );
  }
}
