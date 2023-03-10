import React from 'react';
import './Card.css';

const Card = ({ id, name, email}) => {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow'>
        <img alt='robots' src={`https://robohash.org/test${id}200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
}


export  default Card;