import Button from './Button';
import React from 'react';

export default class Card extends React.component {
  render () {
    return (
      <div className="card ten columns">
        <div className="card-header">
          <div className="card-flip"> Flip </div>
        </div>
        <div className="card-question">Question things and stuff</div>
        <Button />
        <Button />
      </div>
    );
  }
}
