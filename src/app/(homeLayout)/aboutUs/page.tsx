"use client"
import dynamic from "next/dynamic";
const AboutComponent = dynamic(() => import("@/components/AboutComponent"));

const page = () => {
  return (
    <div>
      <AboutComponent/>
    </div>
  );
};

export default page;