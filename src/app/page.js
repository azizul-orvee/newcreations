import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DefaultAccordion } from "@/components/DefaultAccordion";

import dynamic from 'next/dynamic'
 
const DynamicHomePage = dynamic(() => import('@/components/HomePage'), {
  loading: () => <p>Loading...</p>,
})

const DynamicServices = dynamic(() => import('@/components/Services'), {
  loading: () => <p>Loading...</p>,
})

const DynamicTestimonial = dynamic(() => import('@/components/Testimonial'), {
  loading: () => <p>Loading...</p>,
})
 

const DynamicWhyUs = dynamic(() => import('@/components/WhyUs'), {
  loading: () => <p>Loading...</p>,
})
 
const DynamicWork = dynamic(() => import('@/components/Work'), {
  loading: () => <p>Loading...</p>,
})
 


export default function Home() {
  return (
    <>
      <main>
        <div>
          <DynamicHomePage />
        </div>
        <div>
          <DynamicServices />
        </div>
        <div>
          <DynamicWork />
        </div>
        <div>
          <DynamicWhyUs />
        </div>
        <div>
          <DynamicTestimonial />
        </div>
        <div>
          <DefaultAccordion />
        </div>
      </main>
    </>
  );
}
