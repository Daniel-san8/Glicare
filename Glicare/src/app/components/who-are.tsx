"use client";
import React from "react";

import ArrowNext from "@/app/components/ui/arrow-next";
import ArrowPrev from "@/app/components/ui/arrow-prev";
import IconEllipsePhoto from "@/public/svg/icon-ellipse-photo";
import IconLinkedin from "@/public/svg/icon-linkedin";
import IconWeb from "@/public/svg/icon-web";
import Slider from "react-slick";

export default function WhoAre() {

  const collaborators = [
    {
      id: 1,
      name: "Nome do Colaborador",
      function: "Função",
      linkedin: "linkedin",
      web: "portfólio",
    },
    {
      id: 2,
      name: "Nome do Colaborador",
      function: "Função",
      linkedin: "linkedin",
      web: "portfólio",
    },
    {
      id: 3,
      name: "Nome do Colaborador",
      function: "Função",
      linkedin: "linkedin",
      web: "portfólio",
    },
    {
      id: 4,
      name: "Nome do Colaborador",
      function: "Função",
      linkedin: "linkedin",
      web: "portfólio",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: undefined,  
          prevArrow: undefined,
        },
      },
    ],
  };

  return (
    <section className="bg-primary-gray pb-20 sm:max-w-full">
      <div className="px-6">
        <h2 className="text-gray-dark text-2xl lg:text-28 font-medium">Quem somos</h2>
        <p className="text-secondary-gray text-xl font-normal mt-6 sm:max-w-full lg:max-w-624">
          Nós somos o Time Laranja, uma equipe de voluntários do projeto Pipoca
          Ágil, que projetamos e desenvolvemos o Glicare.
        </p>
      </div>

      <div className="mt-16 lg:max-w-[1400px] lg:pl-20">
        <Slider {...settings}>
          {collaborators.map((collaborator) => (
            <div key={collaborator.id} className="mt-6">
              <div className="flex items-center justify-center">
                <IconEllipsePhoto />
              </div>
              <h3 className="text-gray-dark text-center text-2xl font-medium leading-normal mt-6">
                {collaborator.name}
              </h3>
              <p className="text-secondary-gray text-center text-base font-medium leading-normal mt-3">
                {collaborator.function}
              </p>
              <div className="flex items-center justify-center space-x-3 mt-35 mb-8">
                <a href={collaborator.linkedin} target="_blank" rel="noopener noreferrer">
                  <IconLinkedin />
                </a>
                <a href={collaborator.web} target="_blank" rel="noopener noreferrer">
                  <IconWeb />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
