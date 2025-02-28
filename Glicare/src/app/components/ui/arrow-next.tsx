import React from "react";
import { CustomArrowProps } from "react-slick";
import IconArrowRight from "@/public/svg/icon-arrow-right";

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button 
    onClick={onClick} 
    className="slick-arrow absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
  >
    <IconArrowRight/>
  </button>
);

export default NextArrow;