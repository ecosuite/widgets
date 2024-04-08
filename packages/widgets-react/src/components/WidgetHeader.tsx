import React, { ReactNode } from "react";
import "./components.css";

interface HeaderProps {
  icon: ReactNode;

  url: string;

  title: string;
}

export const WidgetHeader = ({ icon, url, title }: HeaderProps) => {
  return (
    <div className="widget-header">
      <div className="widget-title">{title}</div>
      <a href={url} rel="noopener" target="_blank">
        {icon}
      </a>
    </div>
  );
};
