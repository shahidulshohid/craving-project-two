"use client"
// import FaqComponent from "./FaqComponent";
import dynamic from "next/dynamic";
// Lazy load FAQ (only on client)
const FaqComponent = dynamic(() => import('@/components/homeComponents/FaqComponent'), { ssr: false });


const FAQ = () => {
    return (
        <div>
            <FaqComponent/>
        </div>
    );
};

export default FAQ;