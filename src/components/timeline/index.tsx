import React from "react";

import Timeline, { TimelineProps, TimeLineItemProps } from "antd/lib/timeline";

export interface JMTimelineItemProps extends TimeLineItemProps {}

class JMTimelineItem extends React.Component<JMTimelineItemProps> {
  render() {
    return <Timeline.Item {...this.props}>{this.props.children}</Timeline.Item>;
  }
}

export interface JMTimelineProps extends TimelineProps {}

export default class JMTimeline extends React.Component<JMTimelineProps> {
  static Item = JMTimelineItem;

  render() {
    return <Timeline {...this.props}>{this.props.children}</Timeline>;
  }
}
