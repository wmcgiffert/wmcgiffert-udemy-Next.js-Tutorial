import React from 'react';
import './Card.css';

const Card = ({ id, name, email, imgUrl }) => {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow'>
        <img alt='robots' src={imgUrl} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{id}</p>
        </div>
      </div>
    );
}


export  default Card;