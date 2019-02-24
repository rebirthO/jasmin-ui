import React from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { css, cx } from "emotion";

import Button from "../src/components/button";

const componentItems: {
  name: string;
  title: string;
  path: string;
  component: React.ReactNode;
}[] = [
  {
    name: "button",
    title: "Button",
    path: "button",
    component: (
      <div>
        <Button />
      </div>
    )
  }
];

interface IProps {
  match: any;
}

interface IState {}

export default class Dashborad extends React.Component<IProps, IState> {
  render() {
    const { match } = this.props;

    return (
      <div className={styleContainer}>
        <div className={styleSidebar}>
          {componentItems.map(item => {
            return (
              <div key={item.name}>
                <NavLink to={`${match.path}${item.path}`}>{item.title}</NavLink>
              </div>
            );
          })}
        </div>
        <div className={styleContent}>
          <Switch>
            {componentItems.map(item => {
              return (
                <Route
                  key={item.name}
                  path={`${match.path}${item.path}`}
                  render={() => item.component as any}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

const styleContainer = css`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const styleSidebar = css`
  width: 300px;
  padding: 10px;
  border-right: 1px solid #bdbdbd;
  overflow: auto;
`;

const styleContent = css`
  flex: 1;
  min-width: 0;
  padding: 20px;
  overflow: auto;
`;
