import React from "react";
import Slider from 'react-slick';
import Colaborators from "@/app/components/data/collaborators.json"
import IconMovePageRight from "@/public/svg/icon-move-page-right";
import IconMovePageLeft from "@/public/svg/icon-move-page-left";
import IconEllipsePhoto from "@/public/svg/icon-ellipse-photo";
import IconLinkedin from "@/public/svg/icon-linkedin";
import IconWeb from "@/public/svg/icon-web";

export default function WhoWeAre() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IconMovePageRight />,
    prevArrow: <IconMovePageLeft />,
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
      <section className="w-1440 h-5883 bg-primary-gray pl-6">
        <div className="text-left px-6">
            <h2  className="text-dark text-28 font-medium">Quem Somos</h2>
            <p className="text-gray text-xl font-normal mt-6 w-full max-w-700">
              Nós somos o Time Laranja, uma equipe de voluntários do projeto Pipoca Ágil, 
              que projetamos e desenvolvemos o Glicare.
            </p>
        </div>

        <div className="mt-6">
        <Slider {...settings}>
          {Colaborators.map((colaborator, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <IconEllipsePhoto /> 
              </div>
              <h3 className="text-dark text-xl font-medium">{colaborator.nome}</h3>
              <p className="text-gray text-lg font-normal">{colaborator.funcao}</p>
              <div className="flex mt-4 space-x-4">
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