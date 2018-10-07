import React from "react";
import '../styles/imagecard-style.css';

const ImageCard = (props) => (
    <button className='img-container' onClick={props.onClick}>
        <img alt={props.name} src={props.image} className='img-thumbnail rounded img-custom'/>
    </button>
);

export default ImageCard;
