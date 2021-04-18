import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imageElements = images.map(image => (
    <ImageCard image={image} key={image.id} />
  ));
  return <div className='image-list'>{imageElements}</div>;
};

export default ImageList;
