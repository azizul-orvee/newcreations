// components/ServiceCard.js
import React from "react";

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="text-red-500 mb-2">{icon}</div>
      <div className="text-gray-700 text-lg font-semibold">{title}</div>
    </div>
  );
};

export default ServiceCard;
