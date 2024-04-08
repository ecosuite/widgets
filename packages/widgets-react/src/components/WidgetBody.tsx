import React, { ReactNode } from "react";
import "./components.css";

type Props = {
  children: ReactNode;
};

export class WidgetBody extends React.Component<Props> {
  render() {
    return <div className="widget-body">{this.props.children}</div>;
  }
}
