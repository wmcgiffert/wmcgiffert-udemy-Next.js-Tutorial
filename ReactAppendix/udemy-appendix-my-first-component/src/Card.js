import React from 'react';
import './Card.css';

const Card = ({data}) => {
    return (
      <div className='tc card'>
        <div className='RoboCard'>
            <img alt='robots' src={data.imgUrl} />
            <div>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            </div>
        </div>
      </div>
    );
}


export  default Card;