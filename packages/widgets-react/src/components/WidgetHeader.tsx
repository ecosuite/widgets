import React, { ReactNode } from "react";
import "./components.css";

interface HeaderProps {
  url?: string;

  title: string;
}

export const WidgetHeader = ({ url = "null", title }: HeaderProps) => {
  function renderPopout() {
    if (url !== "null") {
      return (
        <a href={url} rel="noopener" target="_blank">
          <i className="material-icons">{"open_in_new"}</i>
        </a>
      );
    }
    return;
  }

  return (
    <div className="widget-header">
      <div className="widget-title">{title}</div>

      <div className="widget-popout">{renderPopout()}</div>
    </div>
  );
};
