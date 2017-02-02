import Button from './Button';
import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card ten columns">
        <div className="card-header">
          <div className="card-flip"> Flip </div>
        </div>
        <div className="card-question">Questions about stuff</div>
        <Button />
        <Button />
      </div>
    );
  }
}
