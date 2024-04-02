import React, { ReactNode } from "react";

interface PopoutProps {
  content: ReactNode;

  url: string;
}

export const WidgetPopout = ({ content, url }: PopoutProps) => {
  return (
    <a href={url} rel="noopener" target="_blank">
      {content}
    </a>
  );
};
