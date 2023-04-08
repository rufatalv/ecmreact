import React from 'react';
import Button from './../forms/Button';
import './styles.scss'
const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <button className='button loadmore' onClick={() => onLoadMoreEvt()}>
      Load More
    </button>
  );
};

export default LoadMore;