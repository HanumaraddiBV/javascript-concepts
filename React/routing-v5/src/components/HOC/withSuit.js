import React, { Component } from "react";

export const WithSuit = (ActualComponent, name) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        power: `Now ${name} is a Iron man and he got the power`,
      };
    }
    render() {
      return <ActualComponent {...this.props} power={this.state.power} />;
    }
  }

  return NewComponent;
};
