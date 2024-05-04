import { useState } from 'react'
import React from 'react'
import { hotelData } from '../utils/hotelData'
import Card from './Card'
const Favourite = ({data, setterFn}) => {
  return (
    <div className='main'>
      <h1>Favourites</h1>
      <div className="content">
        {data.map(it => {
          return ((it.favourite) ? null :  (<Card key={it.id} isFavorite={it.favourite} setterFn={setterFn} item={it}/>)) 
        })}
      </div>
    </div>
  );
}

export default Favourite
