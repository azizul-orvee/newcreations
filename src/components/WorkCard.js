'use client';
import React from "react";
import Image from "next/image";

const WorkCard = ({ step, title, icon }) => {
  return (
    <>
     
      <div className="flex flex-col items-center p-6 bg-white rounded-md shadow-sm">
      <div className="text-gray-900 mb-2 text-lg font-semibold">{step}</div>
{icon}
        <div className="text-gray-900 text-lg font-semibold py-2">{title}</div>
      </div>
    </>
  );
};

export default WorkCard;
