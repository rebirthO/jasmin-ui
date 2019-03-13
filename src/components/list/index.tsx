import React from "react";

import List, { ListProps, ListItemProps, ListGridType } from "antd/lib/list";
import { ListItemMetaProps } from "antd/lib/list/Item";

export interface JMListItemMetaProps extends ListItemMetaProps {}

export interface JMListGridType extends ListGridType {}

export interface JMListItemProps extends ListItemProps {}

class JMListItem extends React.Component<JMListItemProps> {
  render() {
    return <List.Item {...this.props}>{this.props.children}</List.Item>;
  }
}

export interface JMListProps extends ListProps {}

export default class JMList extends React.Component<JMListProps> {
  static Item = JMListItem;

  render() {
    return <List {...this.props}>{this.props.children}</List>;
  }
}
