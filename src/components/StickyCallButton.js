import Link from "next/link";
import React from "react";

const StickyCallButton = () => {
  return (
    <div>
      <div className="fixed bottom-4 md:hidden py-4 w-full flex items-center justify-center bg-cyan-200 text-black">
        <div className="flex justify-center">
          <a
            href="tel:your-phone-number"
            className="bg-yellow-500 px-6 py-1 rounded-md mr-2"
          >
            Call <br /> Now
          </a>
        </div>

        <div className="underline text-3xl ml-4 tracking-wider">
          <Link href="tel:01622196929">01622196929</Link>
        </div>
      </div>
    </div>
  );
};

export default StickyCallButton;
