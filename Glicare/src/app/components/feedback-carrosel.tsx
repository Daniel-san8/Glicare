"use client";

import Slider from "react-slick";
import IUsersFeedback from "@/app/models/feedback.interface";
import IconToCardFeedback from "@/public/svg/icon-to-card-feedback";
import Image from "next/image";

const usersFeedback: IUsersFeedback[] = [
  {
    id: 1,
    feedback:
      "Desde que comecei a usar o Glicare, ficou muito mais fácil acompanhar minha diabetes.",
    user: "Rosângela Amaral",
    image: "/image/user-feedback/Rosangela-Amaral.jpg",
  },
  {
    id: 2,
    feedback:
      "Meus pacientes adoram. Meu trabalho é mais fácil e posso ver a evolução de cada um.",
    user: "Dr. Mauro Cordeiro",
    image: "/image/user-feedback/Dr-Mauro-Cordeiro.jpg",
  },
  {
    id: 3,
    feedback:
      "Ficou muito mais simples de acompanhar a condição da minha mãe.",
    user: "Ana Carolina Medeiros",
     image: "/image/user-feedback/Ana-Carolina-Medeiros.jpg",
  },
];

export default function FeedbackCarrosel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:hidden">
      <Slider {...settings}>
        {usersFeedback.map((feedback) => (
          <div key={feedback.id} className="px-2">
            <div className="flex flex-col md:w-full md:h-80 justify-center items-center text-center gap-4 p-6 rounded-2xl bg-white font-inter">
              <IconToCardFeedback />
              <p className="font-normal md:w-265 text-gray-dark text-base px-6">
                {feedback.feedback}
              </p>
              <div> <div><Image  src={feedback.image} alt={`Foto de ${feedback.user}`} width={64}  height={64} className="rounded-full object-cover"/></div></div>
              <p className="font-normal text-base text-secondary-gray">
                {feedback.user}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
