"use client"
import dynamic from "next/dynamic"
const SupportComponent = dynamic(() => import("@/components/homeComponents/SupportComponent"), {ssr:false})

const Support = () => {
  return (
    <div>
      <SupportComponent/>
    </div>
  );
};

export default Support;