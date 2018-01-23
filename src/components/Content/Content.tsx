import * as React from 'react';
import { Card } from 'antd';
import { Roles, Responsabilities } from './tabs';

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
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          title="Developer"
          tabList={tabList}
          onTabChange={(key: string) => this.onTabChange(key, 'key')}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}
