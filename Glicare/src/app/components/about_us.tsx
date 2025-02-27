"use client";
import React from "react";

import Colaborators from "@/app/components/data/collaborators.json";
import { NextArrow, PrevArrow } from "@/app/components/ui/arrows";
import IconEllipsePhoto from "@/public/svg/icon-ellipse-photo";
import IconLinkedin from "@/public/svg/icon-linkedin";
import IconWeb from "@/public/svg/icon-web";
import Slider from "react-slick";

export default function AboutUs() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-primary-gray pb-20 lg:pl-6">
      <div className="px-6">
        <h2 className="text-dark text-2xl lg:text-28 font-medium">Quem somos</h2>
        <p className="text-gray text-xl font-normal mt-6 max-w-624">
          Nós somos o Time Laranja, uma equipe de voluntários do projeto Pipoca
          Ágil, que projetamos e desenvolvemos o Glicare.
        </p>
      </div>

      <div className="mt-16 pl-6 pr-60">
        <Slider {...settings}>
          {Colaborators.map((colaborator) => (
            <div key={colaborator.id} className="pt-6">
              <div className="flex items-center justify-center space-x-1">
                <IconEllipsePhoto />
              </div>
              <h3 className="text-dark text-center text-2xl font-medium leading-normal mt-6">
                {colaborator.nome}
              </h3>
              <p className="text-gray text-center text-base font-medium leading-normal mt-3">
                {colaborator.funcao}
              </p>
              <div className="flex items-center justify-center space-x-3 mt-35 mb-8">
                <a href={colaborator.linkedin} target="_blank" rel="noopener noreferrer">
                  <IconLinkedin />
                </a>
                <a href={colaborator.web} target="_blank" rel="noopener noreferrer">
                  <IconWeb />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
