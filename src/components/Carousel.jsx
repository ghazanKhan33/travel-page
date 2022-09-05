import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1470596914251-afb0b4510279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1508971607899-a238a095d417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length - 1;
  const prevSlide = () => {
    setSlide(slide === 0 ? length : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === length ? 0 : slide + 1);
  };
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 flex justify-center items-center">
      <div className="relative">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute  top-[50%] text-3xl text-white cursor-pointer right-8 "
      />

      {sliderData.map((image, index) => (
        <div
           key={index}
          className={index === slide ? "opacity-100 ease-linear duration-300" : "opacity-0"}
        >
        
          {index === slide && (
            <img className="w-full rounded-md" src={image.url} alt="/" />
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Carousel;
