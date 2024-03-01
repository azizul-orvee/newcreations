import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DefaultAccordion } from "@/components/DefaultAccordion";
import BreakdownHome from "@/components/BreakdownHome";


export default function Home() {
  return (
    <>
      <main>
        <div>
          <BreakdownHome />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Work />
        </div>
        <div>
          <WhyUs />
        </div>
        <div>
          <Testimonial />
        </div>
        <div>
          <DefaultAccordion />
        </div>
      </main>
    </>
  );
}
