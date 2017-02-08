import React from 'react';
import { findDOMNode } from 'react-dom';
import Carousel from './Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasFocus: false,
      flipped: false,
    };

    // this.handleFocus = this.handleFocus.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
    // this.handleOnFlip = this.handleOnFlip.bind(this);
    // this.handleKeyDown = this.handleOhandleKeyDownnFlip.bind(this);
    // this._hideFlippedSide = this._hideFlippedSide.bind(this);
    // this._showBothSides = this._showBothSides.bind(this);
    // this.focus = this.focus.bind(this);
  }

  getInitialState() {
    return {
      hasFocus: false,
      isFlipped: this.state.flipped,
    };
  }

  handleFocus() {
    this.setState({ isFlipped: true });
  }

  handleBlur() {
    this.setState({ isFlipped: false });
  }

  render() {
    return (
      <div id="content">
        <Carousel
          flipped={ this.state.flipped }
          handleFocus={ this.handleFocus }
          handleBlur={ this.handleBlur }
          handleOnFlip={ this.handleOnFlip }
          handleKeyDown={ this.handleOhandleKeyDownnFlip }
          _hideFlippedSide={ this._hideFlippedSide }
          _showBothSides={ this._showBothSides }
        />
      </div>
    );
  }
}

export default App;
