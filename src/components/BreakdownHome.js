"use client";
import React from "react";
import Image from "next/image";
import Customers from "./Customers";
import tyree from '/public/image/recovery.webp'

const BreakdownHome = () => {
    return (
        <>
    
          <section className="bg-white-500 text-black pb-10 mt-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row py-10">
              <div className="md:w-1/2 rounded-lg overflow-hidden shadow-2xl">
    
                <Image
                  src={tyree}
                  alt="Mobile tyre fitting image"
                  width={800}
                  height={500}
                  placeholder="blur"
                />
              </div>
              <div className="md:w-1/2 flex justify-center items-center text-center">
                <div>
                  <h1 className="text-4xl font-bold mt-8 text-gray-900 font-sans"> 
                    Breakdown <span className="text-red-600">Recovery</span> 
                  </h1>
                  <br />
                  <h2 className="italic font-palanquin font-semibold text-xl animate-pulse bg-blue-50 duration-1000 rounded-2xl p-1 shadow-2xl">Fast, Nationwide Recovery Service: Aiming for 
                  <span className="text-red-600"> 30 to 60 </span>  
                   Minutes Everywhere in the UK</h2>
                  <div className="text-lg text-gray-900">
                 <p className="mt-4">Experience peace of mind with our Breakdown Recovery Service, your immediate solution to unexpected vehicle troubles. Available 24/7, our expert team ensures rapid, reliable assistance nationwide, getting you back on the road swiftly and safely. Whether it's a flat tire, engine failure, or anything in between, trust us to be there when you need us most.</p>
                  <p className="mt-4">
      For immediate assistance, give us a <span className="text-red-600 underline"> <a href='tel:03300432801'>call</a>
        </span> or send us a <span className="text-red-600 underline"> <a href="https://wa.me/+443300432801">WhatsApp</a> </span>  message.
    </p>
    <p className="mt-4">
    You can also check emergency recovery availability directly on our website.
    </p>
    
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-[-25px] lg:mt-10">
              <Customers />
            </div>
          
          </section>
    
        </>
      );
    };

export default BreakdownHome