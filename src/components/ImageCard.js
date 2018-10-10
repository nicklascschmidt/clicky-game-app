import React from "react";
import '../styles/imagecard-style.css';

const ImageCard = (props) => (
    <button className='img-container' value={props.name} onClick={props.onClick}>
        <img alt={props.name} src={props.image} value={props.name} className='img-thumbnail rounded img-custom'/>
    </button>
);

export default ImageCard;
