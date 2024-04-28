import React from "react";
import "./components.css";

export class Widget extends React.Component {
  isContentValid(data: unknown) {
    if (data !== undefined && !this.isContentError(data)) {
      return true;
    }
    return;
  }

  isContentError(data: unknown) {
    return data instanceof EcosuiteComponentError;
  }
}

class EcosuiteComponentError {
  error: string;
  constructor(Error: string) {
    this.error = Error;
  }

  getError() {
    return this.error;
  }
}
