import React from 'react';
import Card from './Card';
import CarouselDots from './CarouselDots';
import styled from 'styled-components';

export default class Carousel extends React.Component {

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.flipped && nextProps.flipped) {
      this.focusElement = document.activeElement;
      this.focusBack = true;
    }

    if (this.state.isFlipped !== nextState.isFlipped) {
      this.notifyFlip = true;
    }
  }

  componentDidUpdate() {
    if (!this.props.flipped && this.focusElement
      && contains(findDOMNode(this), document.activeElement)) {
      this.focusElement.focus();
      this.focusElement = null;
    } else if (this.focusBack) {
      this.refs.back.focus();
      this.focusBack = false;
    }

    if (this.notifyFlip && typeof this.props.onFlip === 'function') {
      this.props.onFlip(this.state.isFlipped);
      this.notifyFlip = false;
    }

    setTimeout(this._hideFlippedSide, 600);
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }
  componentWillReceiveProps(newProps) {
    this.showBothSides();

    setTimeout(() => {
      this.setState({
        isFlipped: newProps.flipped,
      });
    }, 0);
  }

  componentDidMount() {
    this._hideFlippedSide();
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.focus();
    }
  }

  _showBothSides() {
    this.refs.front.style.display = '';
    this.refs.back.style.display = '';
  }

  _hideFlippedSide() {
    if (this.state.isFlipped) {
      this.refs.front.style.display = 'none';
    } else {
      this.refs.back.style.display = 'none';
    }
  }

  render() {
    return (
      <div className="carousel">
        <div className="row">
          <div className="one columns"> ◀︎ </div>
          <Card
            flipped={ this.props.flipped }
            handleFocus={ this.props.handleFocus }
            handleBlur={ this.props.handleBlur }
            handleOnFlip={ this.props.handleOnFlip }
            handleKeyDown={ this.props.handleOhandleKeyDownnFlip }
            _hideFlippedSide={ this.props._hideFlippedSide }
            _showBothSides={ this.props._showBothSides }
          />
          <div className="one columns"> ▶︎ </div>
        </div>
        <div className="row carousel-dots">
          <CarouselDots />
        </div>
      </div>
    );
  }
}
