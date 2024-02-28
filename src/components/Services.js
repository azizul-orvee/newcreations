"use client";
import React, { useEffect, useState } from "react";
import { GiFlatTire } from "react-icons/gi";
import ServiceCard from "./ServiceCard";
import Slider from "react-slick";
import { TbCarSuv } from "react-icons/tb";
import { FaVanShuttle } from "react-icons/fa6";
import { FaCarBattery } from "react-icons/fa6";
import { FaCarCrash } from "react-icons/fa";
import { FaBatteryQuarter } from "react-icons/fa6";


const servicesData = [
  {
    title: "24hr Mobile Tyre Fitting",
    icon: <GiFlatTire size={100} />,
  },
  {
    title: "Van Tyre Fitting",
    icon: <FaVanShuttle size={100} />,
  },
  {
    title: "4x4 Tyre Fitting",
    icon: <TbCarSuv size={100} />,
  },
  {
    title: "Battery Replacement",
    icon: <FaCarBattery size={100} />,
  },
  {
    title: "Breakdown Recovery",
    icon: <FaCarCrash size={100} />,
  },
  {
    title: "Jump Start",
    icon: <FaBatteryQuarter size={100} />,
  },
];



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};


const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 font-semibold tracking-wide uppercase">Our services</h2>
          <p className="mt-2 leading-8 tracking-tight text-gray-900">
          Book online with Azanet Mobile Tyre Fitting and get help in your chosen location at any suitable time.
          </p>
        </div>
        {isMobile ? (
            <div className="mt-2 mb-2 mx-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <Slider {...settings}>
              {servicesData.map((service, index) => (
                <ServiceCard key={index} title={service.title} icon={service.icon} />
              ))}
              </Slider>
            </div>
        ) : (
          <div className="mt-2 mb-2 mx-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} title={service.title} icon={service.icon} />
            ))}
          </div>
        )}
      
      </div>
    </div>
  );
};

export default Services;
