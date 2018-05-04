import React, { PureComponent } from "react";
import threeEntryPoint from "./threeEntryPoint";

export default class ThreeContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.threeContainerRef = React.createRef();
  }
  componentDidMount() {
    threeEntryPoint(this.threeContainerRef.current);
  }

  render() {
    return <div ref={this.threeContainerRef} />;
  }
}
