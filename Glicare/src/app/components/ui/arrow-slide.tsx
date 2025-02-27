import React from "react";
import { CustomArrowProps } from 'react-slick';
import IconArrowRight from '@/public/svg/icon-arrow-right';
import IconArrowLeft from '@/public/svg/icon-arrow-left';

export const NextArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <button 
        onClick={onClick} 
        className="slick-arrow absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
      >
        <IconArrowRight />
      </button>
    );
  };

  export const PrevArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <button 
        onClick={onClick} 
        className="slick-arrow absolute top-1/2 left-2 transform -translate-y-1/2 z-10"
      >
        <IconArrowLeft />
      </button>
    );
  };