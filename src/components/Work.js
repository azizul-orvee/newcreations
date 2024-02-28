import React from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiTyre } from "react-icons/gi";

const Work = () => {
  return (
    <div className="mt-2 smb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2 className="text-3xl text-gray-900 font-semibold tracking-wide uppercase">
            How it Works
          </h2>
        </div>
        <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-2">

    <>
<div className="flex flex-col items-center p-6 bg-white rounded-md shadow-sm">
<div className="p-5 rounded-full shadow-2xl"> {/* Add shadow here */}
    <FaMapMarkerAlt size={100} />
  </div>
        <div className="text-gray-900 text-lg font-semibold py-2">Tell us your location</div>

        </div>
      </>
      <>
<div className="flex flex-col items-center p-6 bg-white rounded-md shadow-sm">
<div className="p-5 rounded-full shadow-2xl"> {/* Add shadow here */}
        <GiTyre size={100} />
        </div>
        <div className="text-gray-900 text-lg font-semibold py-2">Give Us The Tyre Size</div>
      </div>
      </>
      <>
<div className="flex flex-col items-center p-6 bg-white rounded-md shadow-sm">
<div className="p-5 rounded-full shadow-2xl"> {/* Add shadow here */}
        <IoCarSportSharp size={100} />
        </div>
        <div className="text-gray-900 text-lg font-semibold py-2">You Are Back On Road</div>
      </div>
      </>
        </div>
      </div>
    </div>
  );
};

export default Work;
