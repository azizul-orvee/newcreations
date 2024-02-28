"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <h2 className="text-3xl text-center text-gray-900 pt-10 pb-6 font-semibold tracking-wide ">
        FAQ
      </h2>
      <div className="mx-[10%] px-10 shadow-md shadow-gray-500 pb-8">
        <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        How can I get a quote for tyre fitting?
        </AccordionHeader>
        <AccordionBody>
        To receive a personalized quote for your tyre fitting needs, please contact us directly via phone or message. Our prices vary depending on factors such as your location and our current availability. Our team will be happy to provide you with all the information you need to make an informed decision.
        </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        What types of tyres do you offer?
        </AccordionHeader>
        <AccordionBody>
        We specialize in providing mid-range tyres that offer a balance of performance and value. However, we understand that everyone has different needs and preferences when it comes to tyre brands. If you have a specific brand or type of tyre in mind, please let us know, and we will do our best to accommodate your request based on our current stock and availability.
        </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Do you offer emergency mobile tyre fitting?
        </AccordionHeader>
        <AccordionBody>
          We do. Please let one off our team know its a emergency and 
          the booking will be treated as priority.
        </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        What payment methods do you accept?
        </AccordionHeader>
        <AccordionBody>
        For your convenience, we accept several payment methods, including card payments, bank transfers, and cash. Please choose the option that works best for you when booking our services. If you have any questions regarding payment, feel free to contact us for more information.
        </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}


