import React, { Component } from 'react';
const Picture = (props) => {
  return (
    <div className='picture'>
      <img src={props.src} alt={props.alt} className='picture'/>
      {props.children}
    </div>
  )
}
export default Picture;