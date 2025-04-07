"use client"
import dynamic from "next/dynamic";
const AboutComponent = dynamic(() => import("@/components/AboutComponent"), {ssr:false});

const page = () => {
  return (
    <div>
      <AboutComponent/>
    </div>
  );
};

export default page;